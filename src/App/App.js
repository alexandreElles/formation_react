import React from 'react';
import styles from './App.module.css';
import ThumbnailLayout from "./Component/Layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./Component/UI/MemeViewer/MemeViewer";

const initialState = {
    memes:[
        {
            id:1,
            text:'Test test test',
            name:'test',
            x:45,
            y:45,
            imageId:1,
            image:{
                id:0,
                url:'/Meme/spiderman.jpg',
                width:400,
                height:400
            },
            style:{
                fill:'black',
                textDecoration:'underline',
                fontStyle:'italic',
                fontSize:15,
                fontWeight:300
            }
        },
        {
            id:2,
            text:'coucouc',
            name:'test',
            x:200,
            y:150,
            imageId:2,
            image:{
                id:0,
                url:'/Meme/fire.png',
                width:400,
                height:400
            },
            style:{
                fill:'black',
                textDecoration:'underline',
                fontStyle:'italic',
                fontSize:15,
                fontWeight:300
            }
        }
    ],
    current: {
        id:1,
        text:'coucouc',
        name:'test',
        x:0,
        y:0,
        imageId:1,
        style:{
            fill:'black',
            textDecoration:'underline',
            fontStyle:'italic',
            fontSize:15,
            fontWeight:300
        }
    },
    images: [
        {
            id:1,
            url:'/Meme/spiderman.jpg',
            width:400,
            height:400
        },
        {
            id:2,
            url:'/Meme/fire.png',
            width:400,
            height:400
        },
        {
            id:3,
            url:'/Meme/drake.png',
            width:400,
            height:400
        }
    ]
};

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div className={styles.App}>
                <ThumbnailLayout>
                    {
                        this.state.memes.map((e,i) => {
                        return <MemeViewer key={`meme-${i}`} meme={{
                                ...e,
                                image:this.state.images.find(ef=>ef.id===e.imageId)
                            }} />
                        })
                    }
                </ThumbnailLayout>
            </div>
        );
    }
}
export default App;
