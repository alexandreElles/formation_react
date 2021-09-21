import React, {useState} from 'react';
import styles from './MemeEditor.module.css'
import PropTypes from 'prop-types';
import Button from "../Button/Button";

const memeEditorInitialState ={}

function MemeEditor(props) {
    const [state, setState] = useState(memeEditorInitialState);
    return (
        <div className={styles.MemeEditor} data-testid="MemeEditor">
            <form>
                <label htmlfor="Name">Meme label</label>
                <br/>
                <input type="text" id="Name" value={props.meme.name} onChange={(evt)=>{props.onFormChange({...props.meme,name:evt.target.value})}}></input>
                <hr/>
                <h2>Image</h2>
                <select placeholder="Texte du meme" value={props.meme.imageId} onChange={(evt)=>{props.onFormChange({...props.meme,imageId:Number(evt.target.value)})}}>
                    {
                        props.images.map((e,i) => {
                            return <option key={`meme-${i}`} value={
                                e.id
                            } >{e.url}</option>
                        })
                    }
                </select>

                <h2>Texte</h2>
                <input type="text" placeholder="Texte du meme" value={props.meme.text} onChange={(evt)=>{props.onFormChange({...props.meme,text:evt.target.value})}}/>
                <h2>Position</h2>
                <label htmlfor="x">x:</label><input type="number" className={styles.smallInput} value={props.meme.x} onChange={(evt)=>{props.onFormChange({...props.meme,x:Number(evt.target.value)})}}/>
                <label htmlfor="y">y:</label><input type="number" className={styles.smallInput} value={props.meme.y} onChange={(evt)=>{props.onFormChange({...props.meme,y:Number(evt.target.value)})}}/>
                <h2>Options</h2>
                <label htmlFor="Fill">Fill</label><br/>
                <input type="color" id="Fill" className={styles.smallInput} value={props.meme.fill} onChange={(evt)=>{props.onFormChange({...props.meme,fill:evt.target.value})}}/>
                <h2>Dimension</h2>
                <label htmlFor="Height">Height</label><br/>
                <input type="number" className={styles.smallInput} value={props.meme.fontWeight} min={100} max={900} step={100} onChange={(evt)=>{props.onFormChange({...props.meme,fontWeight:Number(evt.target.value)})}}/>
                <Button type="Reset" backgroundColor="Black">Reset</Button>
                <Button type="Submit" backgroundColor="Blue" >Submit</Button>
            </form>

        </div>
    );
}

MemeEditor.propTypes = {
    meme:PropTypes.object.isRequired,
    images:PropTypes.array.isRequired,
    onFormChange:PropTypes.func.isRequired
};

MemeEditor.defaultProps = {

}

export default MemeEditor;