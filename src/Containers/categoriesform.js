import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Categoriesform(props) {
  const { CHANGE_FILTER } = props;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


  function categoryChange(event) {
    CHANGE_FILTER(event.currentTarget.value);
  }

  return (
    <select className="Categoriesform"  onChange={categoryChange}>
      {categories.map(cat => <option className="Categoriespan" key={Math.random() * 50 + Date.toString()}>{cat}</option>)}
    </select>
  );
}

Categoriesform.propTypes = {
  CHANGE_FILTER: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  CHANGE_FILTER: category => dispatch({ type: 'CHANGE_FILTER', category }),
});

export default connect(null, mapDispatchToProps)(Categoriesform);
