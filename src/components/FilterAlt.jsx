import React from 'react';
import FilterAlt_ from './../Icons/filterAlt.svg';
const FilterAlt = (props) => {
  return (
    <img src={FilterAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FilterAlt;
