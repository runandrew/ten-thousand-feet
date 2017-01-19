// Required packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Required files
import store from './store';
import Routes from './Routes';


// Render to DOM
ReactDOM.render(
    <Provider store={ store }>
        <Routes />
    </Provider>,
    document.getElementById('app')
);
