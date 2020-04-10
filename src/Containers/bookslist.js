import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Msgtitle from '../Components/msgtitle';
import Booksform from './booksform';
import Book from './book';
import Categoriesform from './categoriesform';

function Bookslist(props) {
  const { bookstore, filtered } = props;
  
  setTimeout(() => {
    document.querySelectorAll('.notshown').forEach(ele => {
      ele.classList.remove('notshown');
    });
  }, 1);

  return (
    <div className="Menu">
      <Msgtitle />
      <Booksform />
      <Categoriesform />
      {bookstore.filter(e => e.category === filtered).map(e => <Book key={e.id} book={e}></Book>)}
    </div>
  );
}

const mapStateToProps = state => ({ bookstore: state.book, filtered: state.bookfilter });

// Bookslist.propTypes = {
//   bookstore: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       progress: PropTypes.number.isRequired,
//       author: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

// Bookslist.contextTypes = {
//   bookstore: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       progress: PropTypes.number.isRequired,
//       author: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default connect(mapStateToProps)(Bookslist);
