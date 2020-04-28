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

  handleSubmit(event) {
    event.preventDefault()
    // debugger;
    const {
      title, category, author, formpart2completed,
    } = this.state;
    const { CREATE_BOOK } = this.props;
    
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
      <form name="books" onSubmit={this.handleSubmit.bind(this)} >
        <div className="row">
          <input type="text" onChange={this.handleChange} name="title" value={title} placeholder="Type any book title" />
          <select name="category" onChange={this.handleChange} value={category} className="t-end" placeholder="Select Category">
            {categories.map(cat => <option key={Math.random()}>{cat}</option>)}
          </select>
          <input type="submit" className="classbtn1 width1" value="ADD BOOK" />
        </div>
      </form >
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
