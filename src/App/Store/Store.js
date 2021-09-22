import {combineReducers, createStore} from "redux";
import {RESSOURCES, REST_ADR} from "../Config/config";

export const memeInitialState = {
    memes:[],
    images:[]
}

export const MEME_ACTION = Object.freeze({
    ADD_MEMES:'ADD_MEMES',
    ADD_MEME:'ADD_MEME',
    ADD_IMAGES:'ADD_IMAGES',
    ADD_IMAGE:'ADD_IMAGE',
    SELECT_CURRENT:'SELECT_CURRRENT'

})
const  MEME_ACTION_PRIVATE = Object.freeze({
    INIT:'INIT',
    UPDATE_INIT_VALUES:'UPDATE_INIT_VALUES'
})

function memeReducer(state=memeInitialState, action){
    console.log(action.type);
    switch (action.type){
        case MEME_ACTION.SELECT_CURRENT:
            store.dispatch({type: CURRENT_ACTION.UPDT_CURRENT, value: state.memes.find(e=>e.id===action.value)})
            return state
        case MEME_ACTION.ADD_MEMES:
            return {...state, memes:action.values};
        case MEME_ACTION.ADD_MEME:
            return {...state, memes:[...state.memes, action.value]};
        case MEME_ACTION.ADD_IMAGES:
            return {...state, images:action.values};
        case MEME_ACTION.ADD_IMAGE:
            return {...state, images:[...state.images, action.value]};
        case MEME_ACTION_PRIVATE.UPDATE_INIT_VALUES:
            return {...state, memes: action.values[0], images: action.values[1]};
        case MEME_ACTION_PRIVATE.INIT:
            const p1 = fetch(`${REST_ADR}${RESSOURCES.memes}`).then(f=>f.json());
            const p2 = fetch(`${REST_ADR}${RESSOURCES.images}`).then(f=>f.json());
            Promise.all([p1,p2]).then(values => {
                store.dispatch({type:MEME_ACTION_PRIVATE.UPDATE_INIT_VALUES, values:values})
            })
            return state;
        default:
            return state;
    }
}

export const currentInitialState = {
    text: '',
    name: '',
    x: 0,
    y: 0,
    imageId: -1,
    fill: '#000',
    color: '#000',
    textDecoration: 'underline',
    fontStyle: 'italic',
    fontSize: 10,
    fontWeight: 100
}

export const CURRENT_ACTION = Object.freeze({
    UPDT_CURRENT:'UPDT_CURRENT',
    SAVE_CURRENT:'SAVE_CURRENT',
    CLEAR_CURRENT:'CLEAR_CURRENT'

})

const currentReducer = (state=currentInitialState, action) => {
    console.log(action.type);
    switch (action.type){
        case CURRENT_ACTION.CLEAR_CURRENT:
            return {currentInitialState};
        case CURRENT_ACTION.UPDT_CURRENT:
            return {...state,...action.value};
        case CURRENT_ACTION.SAVE_CURRENT:
            const p1 = fetch(`${REST_ADR}${RESSOURCES.memes}${state.id?'/'+state.id:''}`,
                { headers:{"Content-type":"Application/json"},
                    method:`${state.id?'PUT':'POST'}`,
                    body: JSON.stringify(state)
                }).then(
                    f=>{
                        store.dispatch({type: MEME_ACTION_PRIVATE.INIT});
                    }, f=>{

                });
            return state;
        default:
            return state;
    }
}

window.__REDUX_DEVTOOLS_EXTENSION = undefined;
const store = createStore(
    combineReducers({lists:memeReducer, current: currentReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({
    type:'INIT'
});

export default store;