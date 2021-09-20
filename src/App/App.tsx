import React from 'react';
import './App.css';
import Button from "./Component/UI/Button/Button";

function App() {
  return (
    <div className="App">
        Hello world
        <hr/>
        <Button text="Je ne veux rien" onLeftClick={(arg)=>{
            console.log(arg);
        }}>
            <div>fhjek</div>
            <div>djslfjk</div>
        </Button>
        <Button>Demat hjk</Button>
        <Button onLeftClick={()=>{}}></Button>
    </div>
  );
}

export default App;
