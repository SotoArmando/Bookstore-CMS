import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/app';
import * as serviceWorker from './serviceWorker';
import rootReducer from './Reducers/index';


const initialState = [
  {
    id: Math.random() + Date().toString(),
    title: 'Nice Book',
    desc: 'Nice desc',
    category: 'Action',
    progress: 0,
    author: 'Armando Soto',
  },
];

const store = createStore(rootReducer, { book: initialState });

ReactDOM.render(
  <Provider store={store}>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap" rel="stylesheet" />
    </head>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
