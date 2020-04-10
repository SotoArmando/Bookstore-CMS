import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Msgtitle from '../Components/msgtitle';
import Booksform from './booksform';
import Book from './book';

function Categoriesform(props) {
    const { FILTER_BOOK } = props;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


    function categoryClick(a) {
        document.querySelectorAll("span.Categoriespan.active").forEach(e => e.classList.remove("active"));
        a.currentTarget.classList.add("active")
        FILTER_BOOK(a.currentTarget.textContent);
    }

    return (
        <div className="Categoriesform">
            {categories.map(cat => <span className="Categoriespan" key={Math.random() * 50 + Date.toString()} onClick={categoryClick} >{cat}</span>)}
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    FILTER_BOOK: category => dispatch({ type: 'FILTER_BOOK', category }),
});

export default connect(null, mapDispatchToProps)(Categoriesform);
