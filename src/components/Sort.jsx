import React from 'react';
import Sort_ from './../Icons/sort.svg';
const Sort = (props) => {
  return (
    <img src={Sort_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sort;
