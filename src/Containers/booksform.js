import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Booksform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
      author: '',
      formpart1completed: false,
      formpart2completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderSubmit = this.renderSubmit.bind(this);

    document.addEventListener('keydown', this.renderSubmit);
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const {
      title, category, author, formpart2completed,
    } = this.state;
    const { CREATE_BOOK } = this.props;

    if (formpart2completed === true) {
      CREATE_BOOK({
        title, category, author, progress: 0, filtered: true,
      });

      this.setState({
        title: '',
        category: 'Action',
        author: '',
        formpart1completed: false,
        formpart2completed: false,
      });
    } else {
      this.setState({
        title,
        category,
        author,
        formpart1completed: true,
        formpart2completed: true,
      });
      setTimeout(() => { document.querySelector("form[name='books'] input[name='author']").focus(); }, 100);
    }

    document.querySelector("form[name='books'] input[name='author']").blur();
  }

  renderSubmit(event) {
    const { key } = event;
    if (key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const {
      title, category, author, formpart1completed, formpart2completed,
    } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <form name="books">
        <div className="Booksform p-relative">
          <input type="checkbox" className="off" name="formpart1completed" value={formpart1completed} />
          <div className="row">
            <input type="text" onChange={this.handleChange} name="title" value={title} placeholder="Type any book title" />
            <input className="center-hover" type="text" />
            <input className="t-center center-placeholder" type="text" placeholder="Tap [enter]" />
            <select name="category" onChange={this.handleChange} value={category} className="t-end" placeholder="Select Category">
              {categories.map(cat => <option key={Math.random()}>{cat}</option>)}
            </select>
          </div>
          <input type="checkbox" className="off" name="formpart2completed" value={formpart2completed} />
          <div className="row off">
            <input type="text" name="author" onChange={this.handleChange} value={author} placeholder="Author" />
            <input className="center-hover" type="text" />
            <input className="t-center center-placeholder" type="text" placeholder="Tap [enter] to SUBMIT" />
            <input type="button" value="Cancel" style={{ textAlign: 'end' }} />
          </div>
        </div>
      </form>
    );
  }
}


Booksform.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  CREATE_BOOK: book => dispatch({ type: 'CREATE_BOOK', book }),
});

export default connect(null, mapDispatchToProps)(Booksform);
