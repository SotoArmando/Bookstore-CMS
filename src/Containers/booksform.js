import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Booksform(props) {
  const { CREATE_BOOK } = props;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const Createbook = a => {
    const { key } = a;
    if (key === 'Enter') {
      const inputs = "input[name='booktitle'], select[name='bookcat'], input[name='formpart0checkbox'], input[name='formpart1checkbox'], input[name='bookauthor']";
      const form = document.querySelectorAll(inputs);
      if (form[0].checked === true) {
        CREATE_BOOK({
          desc: 'Random desc', name: form[1].value, cat: form[2].value, author: form[4].value, progress: 0,
        });
        form[1].value = '';
        form[2].value = 'Action';
        form[0].checked = 0;
        form[3].checked = 0;
        form[4].value = '';
        form[4].blur();
      } else {
        form[0].checked = 1;
        form[3].checked = 1;
        setTimeout(() => { form[4].focus(); }, 100);
      }
    }
  };

  document.addEventListener('keydown', Createbook);

  return (
    <div className="Booksform p-relative">
      <input type="checkbox" className="off" name="formpart0checkbox" />
      <div className="row">
        <input type="text" name="booktitle" placeholder="Type any book title" />
        <input className="center-hover" type="text" />
        <input className="t-center center-placeholder" type="text" placeholder="Tap [enter]" />

        <select name="bookcat" className="t-end" placeholder="Select Category">
          {categories.map(cat => <option key={Math.random() * 50 + Date.toString()}>{cat}</option>)}
        </select>
        {/* document.querySelector("input[type=checkbox]:checked") */}

      </div>
      <input type="checkbox" className="off" name="formpart1checkbox" />
      <div className="row off">
        <input type="text" name="bookauthor" placeholder="Author" />
        <input className="center-hover" type="text" />
        <input className="t-center center-placeholder" type="text" placeholder="Tap [enter] to SUBMIT" />
        <input type="button" value="Cancel" style={{ textAlign: 'end' }} />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  CREATE_BOOK: book => dispatch({ type: 'CREATE_BOOK', book }),
});


Booksform.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Booksform);
