import React from 'react';
import Nav from './nav';
import Bookslist from '../Containers/bookslist';
import '../style.css';
import '../style.scss';

const App = () => (
  <div className="App">
    <Nav />
    <Bookslist />
  </div>
);


export default App;
