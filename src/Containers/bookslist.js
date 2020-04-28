import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Booksform from './booksform';
import Book from './book';


function Bookslist(props) {
  const {
    bookstore, filtered, REMOVE_BOOK, UPDATE_BOOK,
  } = props;

  setTimeout(() => {
    document.querySelectorAll('.notshown').forEach(ele => {
      ele.classList.remove('notshown');
    });
  }, 1);

  const handleRemoveBook = index => {
    REMOVE_BOOK(index);
  };

  const handleUpdateBook = (book, index) => {
    UPDATE_BOOK(book, index);
  };

  return (
    <div className="Menu">
      {bookstore.map(({
        id, category, title, progress, author,
      }, index) => (
        <div key={id + id}>
          {(category === filtered || filtered === 'All')
            ? (
              <Book
                key={id}
                book={{
                  id, category, title, progress, author,
                }}
                deleteindex={index}
                handleRemoveBook={handleRemoveBook}
                updatemethod={handleUpdateBook}
              />
            ) : null}
        </div>
      ))}

      <Booksform />
    </div>
  );
}

const mapStateToProps = state => ({ bookstore: state.book, filtered: state.bookfilter });

const mapDispatchToProps = dispatch => ({
  REMOVE_BOOK: index => dispatch({ type: 'REMOVE_BOOK', index }),
  UPDATE_BOOK: (book, index) => dispatch({ type: 'UPDATE_BOOK', book, index }),
});

Bookslist.propTypes = {
  bookstore: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filtered: PropTypes.string.isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  UPDATE_BOOK: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
