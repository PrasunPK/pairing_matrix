import React, {Component} from 'react';
import './App.css';
import TopAndLeft from "./TopAndLeft";
import MainContainer from "./container";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <TopAndLeft value="1"/>
                    <MainContainer/>
                </div>
            </div>
        );
    }
}

export default App;
