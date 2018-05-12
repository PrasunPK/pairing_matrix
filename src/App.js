import React, {Component} from 'react';
import './App.css';
import Drawer from "./left-navigation/Drawer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Drawer/>
            </div>
        );
    }
}

export default App;
