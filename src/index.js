import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import teamReducers from './team/team.reducers'
import matrixReducers from './matrix/dumb-components/matrix.reducers'
import {BrowserRouter} from "react-router-dom";

const rootReducer = combineReducers({teamReducers, matrixReducers});
const store = createStore(rootReducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
