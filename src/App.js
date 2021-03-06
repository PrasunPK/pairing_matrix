import React, {Component} from 'react';
import './App.css';
import AppBar from "./left-navigation/app-bar.container";
import MenuList from "./left-navigation/menu.component";
import Routes from "./routes/routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar/>
                <div className="decoratedLeftNav">
                    <MenuList/>
                </div>
                <Routes/>
            </div>
        );
    }
}

export default App;
