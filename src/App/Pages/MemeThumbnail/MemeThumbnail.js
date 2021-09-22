import React, {useEffect, useState} from 'react';
import styles from './MemeThumbnail.module.css'
import PropTypes from 'prop-types';
import ThumbnailLayout from "../../Component/Layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "../../Component/UI/MemeViewer/MemeViewer";
import store, {currentInitialState, memeInitialState} from "../../Store/Store";
import {Link} from "react-router-dom";

const memeThumbnailInitialState ={}

function MemeThumbnail(props) {
    const [state, setState] = useState(memeInitialState);
    useEffect(()=> {
        setState(store.getState().lists);
        store.subscribe(() => {
            setState(store.getState().lists);
        })
    }, [])
    return (
        <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
            <ThumbnailLayout>
                {state.memes.map((e, i) => {
                    return (
                        <Link to={`/editor/${e.id}`} key={`meme-${i}`} style={{flex:1}}>
                        <MemeViewer

                            meme={{
                                ...e,
                                image: state.images.find((ef) => ef.id === e.imageId),
                            }}
                        />
                        </Link>
                    );
                })}
            </ThumbnailLayout>
        </div>
    );
}

MemeThumbnail.propTypes = {

};

MemeThumbnail.defaultProps = {

}

export default MemeThumbnail;