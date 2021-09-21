import React from 'react';
import styles from './App.module.css';

const initialState = {
    memes:[
        {
            id:1,
            text:'coucouc',
            name:'test',
            x:0,
            y:0,
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
            x:0,
            y:0,
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
            url:'/Meme/fire.jpg',
            width:400,
            height:400
        },
        {
            id:3,
            url:'/Meme/drake.jpg',
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

            </div>
        );
    }
}
export default App;
