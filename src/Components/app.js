import React from 'react';
import '../style.css';
import BooksForm from './booksform';
import BooksList from '../Containers/booklist';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
