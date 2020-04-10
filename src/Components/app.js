import React from 'react';
import Nav from './nav';
import Bookslist from '../Containers/bookslist';
import '../style.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Bookslist />
    </div>
  );
}


export default App;
