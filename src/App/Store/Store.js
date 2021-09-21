import {createStore} from "redux";
import {RESSOURCES, REST_ADR} from "../Config/config";

const memeInitialState = {
    memes:[],
    images:[]
}

export const MEME_ACTION = Object.freeze({
    ADD_MEMES:'ADD_MEMES',
    ADD_MEME:'ADD_MEME',
    ADD_IMAGES:'ADD_IMAGES',
    ADD_IMAGE:'ADD_IMAGE',

})
const  MEME_ACTION_PRIVATE = Object.freeze({
    INIT:'INIT',
    UPDATE_INIT_VALUES:'UPDATE_INIT_VALUES'
})

function memeReducer(state=memeInitialState, action){
    console.log(action.type);
    switch (action.type){
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

const store = createStore(memeReducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({
    type:'INIT'
});

export default store;