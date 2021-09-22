import React, {useEffect, useState} from 'react';
import styles from './MemeCreator.module.css'
import MemeViewer from "../../Component/UI/MemeViewer/MemeViewer";
import MemeEditor from "../../Component/UI/MemeEditor/MemeEditor";
import FlexLayout from "../../Component/Layout/FlexLayout/FlexLayout";
import store, {CURRENT_ACTION, currentInitialState, memeInitialState} from "../../Store/Store";
import {useParams, withRouter} from 'react-router-dom';


const MemeCreator = (props) => {
    const [state, setState] = useState(currentInitialState);
    const [lists, setLists] = useState(memeInitialState);
    const [listsIsSet, setListsIsSet] = useState(false);
    //const currentId = useParams().id;

    useEffect(()=>{
        setState(store.getState().current);
        setLists(store.getState().lists);
        store.subscribe(()=>{
            setState(store.getState().current);
            setLists(store.getState().lists);
        })

    })
    useEffect(()=>{
        if(props.match.params.id){
            store.dispatch({type: CURRENT_ACTION.UPDT_CURRENT, value: lists.memes.find(e=>e.id===Number(props.match.params.id))})
        } else{
            store.dispatch({type: CURRENT_ACTION.CLEAR_CURRENT});
        }

    }, [lists, props.match.params.id])
    console.trace(props);
    return (
        <div className={styles.MemeCreator} data-testid="MemeCreator">
            <FlexLayout>
                <MemeViewer meme={{...state,image:lists.images.find(e=>e.id===state.imageId)}}></MemeViewer>
                <MemeEditor meme={state} images={lists.images} onFormChange={(currentInForm) => {
                    this.setState({current:currentInForm})
                }}></MemeEditor>
            </FlexLayout>
        </div>
    );
}

MemeCreator.propTypes = {

};

MemeCreator.defaultProps = {

}

export default withRouter(MemeCreator);