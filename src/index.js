import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.querySelector('#root');
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootEl);
} else {
  ReactDOM.render(<App />, rootEl);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
