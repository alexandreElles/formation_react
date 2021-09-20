import React from 'react';
import './App.css';
import {Button} from "./Component/UI/Button/Button";

function App() {
  return (
    <div className="App">
        Hello world
        <hr/>
        <Button text="Je ne veux rien">
            <div>fhjek</div>
            <div>djslfjk</div>
        </Button>
        <Button text="COucou"/>
        <Button></Button>
    </div>
  );
}

export default App;
