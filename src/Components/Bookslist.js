import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Msgtitle from '../Containers/msgtitle';
import Booksform from '../Containers/booksform';
import Book from './Ennumerated_Components/Book';

function Bookslist(props) {
  const { bookstore } = props;

  setTimeout(() => {
    document.querySelectorAll('.notshown').forEach(ele => {
      ele.classList.remove('notshown');
    });
  }, 1);

  return (
    <div className="Menu">
      <Msgtitle />
      <Booksform />
      {bookstore.map(ele => <Book key={ele.id} book={ele} />)}
    </div>
  );
}

const mapStateToProps = state => ({ bookstore: state.book });

Bookslist.propTypes = {
  bookstore: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Bookslist.contextTypes = {
  bookstore: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Bookslist);
