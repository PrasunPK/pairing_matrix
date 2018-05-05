import React, {Component} from 'react';
import './App.css';
import TopAndLeft from "./TopAndLeft";
import MainContainer from "./MainContainer";
import LeftNavigationContainer from "./LeftNavigationContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="left-section">
                    <LeftNavigationContainer/>
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
