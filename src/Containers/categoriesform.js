import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Categoriesform(props) {
  const { CHANGE_FILTER } = props;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


  function categoryClick(a) {
    document.querySelectorAll('span.Categoriespan.active').forEach(e => e.classList.remove('active'));
    a.currentTarget.classList.add('active');
    CHANGE_FILTER(a.currentTarget.textContent);
  }

  return (
    <div className="Categoriesform">
      {categories.map(cat => <span role="button" tabIndex={0} className="Categoriespan" key={Math.random() * 50 + Date.toString()} onClick={categoryClick}>{cat}</span>)}
    </div>
  );
}

Categoriesform.propTypes = {
  CHANGE_FILTER: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  CHANGE_FILTER: category => dispatch({ type: 'CHANGE_FILTER', category }),
});

export default connect(null, mapDispatchToProps)(Categoriesform);
