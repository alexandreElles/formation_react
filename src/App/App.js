import React from 'react';
import styles from './App.module.css';
import ThumbnailLayout from "./Component/Layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./Component/UI/MemeViewer/MemeViewer";
import {RESSOURCES, REST_ADR} from "./Config/config";
import FlexLayout from "./Component/Layout/FlexLayout/FlexLayout";
import MemeEditor from "./Component/UI/MemeEditor/MemeEditor";

const initialState = {
    memes: [],
    current: {
        id:1,
        text:'coucouc',
        name:'test',
        x:78,
        y:78,
        imageId:2,
        fill:'black',
        color:'blue',
        textDecoration:'underline',
        fontStyle:'italic',
        fontSize:15,
        fontWeight:300

    },
    images:[]
};

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
       const promise1 = fetch(`${REST_ADR}${RESSOURCES.memes}`)
            .then(f=>f.json());
        /*.then(arr=>{
            this.setState(memes:arr)
            return arr;
        })*/
        const promise2 = fetch(`${REST_ADR}${RESSOURCES.images}`)
            .then(f=>f.json());
        /*.then(arr=>{
            this.setState(images:arr)
            return arr;
        })*/
        Promise.all([promise1,promise2]).then((fs)=>{
            console.log(fs);
            this.setState({memes: fs[0], images: fs[1]});
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
