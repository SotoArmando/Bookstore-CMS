import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);
    const {
      category, title, author, progress,
    } = props.book;
    this.state = {
      category,
      title,
      author,
      progress,
      editmode: false,
    };
    this.handleEditmode = this.handleEditmode.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEditmode(event) {
    const {
      editmode, category, title, author, progress,
    } = this.state;
    document.querySelectorAll('.Book').forEach(book => book.classList.toggle('unfocused'));
    event.target.parentNode.parentElement.parentElement.classList.remove('unfocused');
    this.setState({
      editmode: !editmode,
      category,
      title,
      author,
      progress,
    });
  }

  handleUpdate() {
    const { updatemethod, deleteindex, book } = this.props;
    const {
      category, title, author, progress, editmode,
    } = this.state;
    updatemethod({
      id: book.id, category, title, author, progress,
    }, deleteindex);
    document.querySelectorAll('.Book.unfocused').forEach(i => i.classList.remove('unfocused'));
    this.setState({
      category, title, author, progress, editmode: !editmode,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const {
      category, title, author, progress, editmode,
    } = this.state;
    const { deleteindex, handleRemoveBook } = this.props;
    return (
      <div className="notshown Book">
        <div className="col">
          <span className="fw-700">{category}</span>
          <span>{title}</span>
          <span>{author}</span>
          <span className="sidemenu">
            <span role="button" tabIndex={0} onClick={() => { handleRemoveBook(deleteindex); }}>Remove</span>
            <span role="button" tabIndex={0} onClick={this.handleEditmode}>Edit</span>
          </span>
        </div>
        <div className="col">
          <span className="fw-600">PROGRESS</span>
          <span>
            {progress}
            {' '}
            %
          </span>
        </div>
        <div className={`Editor ${(editmode) ? 'on' : ''}`}>
          <span>
            This is the&nbsp;
            <span>
              <select
                name="category"
                value={category}
                onChange={this.handleChange}
                className="t-end"
                placeholder="Select Category"
              >
                {
                  categories.map(cat => <option key={Math.random()}>{cat}</option>)
                }
              </select>
            </span>
            {' '}
            book&nbsp;
            <span><input type="text" name="title" value={title} onChange={this.handleChange} /></span>
            {' '}
            by&nbsp;
            <span><input type="text" name="author" value={author} onChange={this.handleChange} /></span>
            {' '}
            and I have Completed&nbsp;
            <span><input type="text" maxLength="3" name="progress" value={progress} onChange={this.handleChange} /></span>
            {' '}
            Percent  of it.
          </span>
          <div className="row">
            <input type="button" onClick={this.handleUpdate} className="classbtn0" value="Submit" />
            <input type="button" onClick={this.handleEditmode} className="classbtn0" value="Cancel" />
          </div>
        </div>
      </div>
    );
  }
}


Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  updatemethod: PropTypes.func.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  deleteindex: PropTypes.number.isRequired,
};

export default Book;
