import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'; // provide react component the redux daata
import configureStore from './redux/store/configureStore';


const store=configureStore();//in ssr we pass a value her ({}) which is the SSR-->when nothing is passed, undefined

ReactDOM.render(
    <Provider store={store}>
<Router>
    
    <App />
</Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
