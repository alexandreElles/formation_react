import React from 'react';
import styles from './App.module.css';
import Navbar from "./Component/UI/Navbar/Navbar";
import MemeCreator from "./Pages/MemeCreator/MemeCreator";
import MemeThumbnail from "./Pages/MemeThumbnail/MemeThumbnail";
import {Switch, Route} from 'react-router-dom'


class App extends React.Component{

    render() {
        return (
            <>
            <div className={styles.App}>
                <Navbar/>
                <Switch >
                    <Route path="/" exact>
                        <h1>Ghfjgdjhfgsj</h1>
                    </Route>
                    <Route path="/editor" exact>
                        <MemeCreator/>
                    </Route>
                    <Route path="/editor/:id">
                        <MemeCreator/>
                    </Route>
                    <Route path="/thumbnail">
                        <MemeThumbnail/>
                    </Route>
                </Switch>


            </div>
            </>
        );
    }
}
export default App;
