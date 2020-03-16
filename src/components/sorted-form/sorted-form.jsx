import React from "react";
import PropTypes from 'prop-types';

const SortedForm = (props) => {

  const _handleChange = (event) => {
    props.onSelectSortType(event.target.value);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select className="places__sorting-type" id="places-sorting" defaultValue={`popular`} onChange={_handleChange}>
        <option className="places__option" value="popular">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
    </form>
  );
};

SortedForm.propTypes = {
  onSelectSortType: PropTypes.func.isRequired
};

export default SortedForm;
