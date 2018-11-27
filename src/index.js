import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'


// Connecting our react application to store through Provider by passing store as a props.
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
);
