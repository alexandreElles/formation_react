import React from 'react';
import './App.css';
import MemeViewer from "./Component/UI/MemeViewer/MemeViewer";

function App() {
  return (
    <div className="App">
        Hello world
        <hr/>
        <MemeViewer meme={{text:'coucouc', name:'test', x:0, y:0, image:{url:'/Meme/spiderman.jpg', width:400, height:400}, style:{fill:'black', textDecoration:'underline', fontStyle:'italic', fontSize:15, fontWeight:300}}}/>
    </div>
  );
}

export default App;
