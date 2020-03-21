import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './Reducers/index'
import App from './components/app'
import './index.css'

const books = [
    { "id": Math.random * 99999, "name": "The greay history", "desc": "This is a big book", "categorie": 0 },
    { "id": Math.random * 99999, "name": "The greay history 1", "desc": "This is a big book 1", "categorie": 1 },
]

const store = createStore(reducers, { books })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)