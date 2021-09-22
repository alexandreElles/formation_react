import React from 'react';
import styles from './App.module.css';
import ThumbnailLayout from "./Component/Layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./Component/UI/MemeViewer/MemeViewer";
import {RESSOURCES, REST_ADR} from "./Config/config";
import FlexLayout from "./Component/Layout/FlexLayout/FlexLayout";
import MemeEditor from "./Component/UI/MemeEditor/MemeEditor";
import store, {currentInitialState, memeInitialState} from "./Store/Store";

const initialState = {
    current:currentInitialState,
    images: memeInitialState.images
};

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
       this.setState({current: store.getState().current, images:store.getState().lists.images});
       store.subscribe(()=>{
           this.setState({current: store.getState().current, images:store.getState().lists.images});
       })
    }

    render() {
        return (
            <>
            <div className={styles.App}>
                <FlexLayout>
                    <MemeViewer meme={{...this.state.current,image:this.state.images.find(e=>e.id===this.state.current.imageId)}}></MemeViewer>
                    <MemeEditor meme={this.state.current} images={this.state.images} onFormChange={(currentInForm) => {
                        this.setState({current:currentInForm})
                    }}></MemeEditor>
                </FlexLayout>
            </div>
            <div>{JSON.stringify(this.state)}</div>
            </>
        );
    }
}
export default App;
