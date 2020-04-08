import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Book(props) {
  const { book } = props;
  const { name, cat, progress, author } = book;

  return (
    <div className="notshown Book">
      <div className="col">
        <span className="fw-700">{cat}</span>
        <span>{name}</span>
        <span>{author}</span>
        <span className="sidemenu">
          <span>Remove</span>
          <span>Edit</span>
        </span>
      </div>
      <div className="col">
        <span>PROGRESS</span>
        <span>
          Update Progress&nbsp;
          {progress}
          %
        </span>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  // dispatching plain actions
  // CREATE_BOOK: (book) => dispatch({ type: 'CREATE_BOOK', book }),
  REMOVE_BOOK: index => dispatch({ type: 'REMOVE_BOOK', index }),
  UPDATE_BOOK: book => dispatch({ type: 'UPDATE_BOOK', book }),
});

Book.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapDispatchToProps)(Book);
