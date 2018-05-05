import React, {Component} from 'react';
import './App.css';
import TopAndLeft from "./TopAndLeft";
import MainContainer from "./container";
import LeftNavigation from "./LeftNavigation";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="left-section">
                    <LeftNavigation/>
                </div>
                <div className="right-section">
                    <TopAndLeft/>
                    <MainContainer/>
                </div>
            </div>
        );
    }
}

export default App;
