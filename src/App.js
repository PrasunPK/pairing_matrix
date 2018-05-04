import React, {Component} from 'react';
import './App.css';
import TopAndLeft from "./TopAndLeft";
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <TopAndLeft value="1"/>
                    <Main/>
                </div>
            </div>
        );
    }
}

export default App;
