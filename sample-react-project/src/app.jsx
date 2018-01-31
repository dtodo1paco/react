import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';

function renderApp (divId, baseURL) {
    ReactDOM.render(
        <App baseURL={baseURL} />,
            document.querySelector(divId)
    );
}
window.renderApp = renderApp;