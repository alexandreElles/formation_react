import React from 'react';
import styles from './App.module.css';
import ThumbnailLayout from "./Component/Layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./Component/UI/MemeViewer/MemeViewer";
import {RESSOURCES, REST_ADR} from "./Config/config";

const initialState = {
    memes: [],
    current: {},
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

            </div>
            <div>{JSON.stringify(this.state)}</div>
            </>
        );
    }
}
export default App;
