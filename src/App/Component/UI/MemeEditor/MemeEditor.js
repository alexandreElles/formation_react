import React, {useEffect, useState} from 'react';
import styles from './MemeEditor.module.css'
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import store, {CURRENT_ACTION, currentInitialState, memeInitialState} from "../../../Store/Store";

const memeEditorInitialState ={}

function MemeEditor(props) {
    const [images, setImages] = useState(memeInitialState.images);
    const [current, setCurrent] = useState(currentInitialState);
    useEffect(()=> {
        setCurrent(store.getState().current);
        setImages(store.getState().lists.images);
        store.subscribe(()=>{
            setImages(store.getState().lists.images);
        })
    }, [])
    useEffect(()=> {
        store.dispatch({type:CURRENT_ACTION.UPDT_CURRENT, value:current})
    }, [current])
    return (
        <div className={styles.MemeEditor} data-testid="MemeEditor">
            <form onSubmit={(evt)=>{
                evt.preventDefault();
                store.dispatch({type:CURRENT_ACTION.SAVE_CURRENT})
            }}>
                <label htmlFor="Name">Meme label</label>
                <br/>
                <input type="text" id="Name" value={current.name} onChange={(evt)=>{setCurrent({...current,name:evt.target.value})}}></input>
                <hr/>
                <h2>Image</h2>
                <select placeholder="Texte du meme" value={current.imageId} onChange={(evt)=>{setCurrent({...current,imageId:Number(evt.target.value)})}}>
                    {
                        images.map((e,i) => {
                            return <option key={`meme-${i}`} value={
                                e.id
                            } >{e.url}</option>
                        })
                    }
                </select>

                <h2>Texte</h2>
                <input type="text" placeholder="Texte du meme" value={current.text} onChange={(evt)=>{setCurrent({...current,text:evt.target.value})}}/>
                <h2>Position</h2>
                <label htmlFor="x">x:</label><input type="number" className={styles.smallInput} value={current.x} onChange={(evt)=>{setCurrent({...current,x:Number(evt.target.value)})}}/>
                <label htmlFor="y">y:</label><input type="number" className={styles.smallInput} value={current.y} onChange={(evt)=>{setCurrent({...current,y:Number(evt.target.value)})}}/>
                <h2>Options</h2>
                <label htmlFor="Fill">Fill</label><br/>
                <input type="color" id="Fill" className={styles.smallInput} value={current.fill} onChange={(evt)=>{setCurrent({...current,fill:evt.target.value})}}/>
                <label htmlFor="Color">Color</label><br/>
                <input type="color" id="Color" className={styles.smallInput} value={current.color} onChange={(evt)=>{setCurrent({...current,color:evt.target.value})}}/>
                <h2>Dimension</h2>
                <label htmlFor="Height">Height</label><br/>
                <input type="number" className={styles.smallInput} value={current.fontWeight} min={100} max={900} step={100} onChange={(evt)=>{setCurrent({...current,fontWeight:Number(evt.target.value)})}}/>
                <label htmlFor="Size">Size</label><br/>
                <input type="number" className={styles.smallInput} value={current.Size} min={5} max={100} step={1} onChange={(evt)=>{setCurrent({...current,fontSize:Number(evt.target.value)})}}/>
                <hr/>
                <Button type="Reset" backgroundColor="Black">Reset</Button>
                <Button type="Submit" backgroundColor="Blue" >Submit</Button>
            </form>

        </div>
    );
}

MemeEditor.propTypes = {
    meme:PropTypes.object.isRequired
};

MemeEditor.defaultProps = {

}

export default MemeEditor;