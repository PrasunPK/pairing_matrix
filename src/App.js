import React, {Component} from 'react';
import './App.css';
import LeftNavigationContainer from "./left-navigation/LeftNavigationContainer";
import {Route, Switch} from "react-router-dom";
import Matrix from "./matrix/Matrix";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="left-section">
                    <LeftNavigationContainer/>
                </div>
                <div className="right-section">
                    <main>
                        <Switch>
                            <Route exact path='/matrix' component={Matrix}/>
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
