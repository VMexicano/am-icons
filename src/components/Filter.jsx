import React from 'react';
import Filter_ from './../Icons/filter.svg';
const Filter = (props) => {
  return (
    <img src={Filter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Filter;
