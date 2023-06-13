import React from 'react';
import ChevronRight_ from './../Icons/chevronRight.svg';
const ChevronRight = (props) => {
  return (
    <img src={ChevronRight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChevronRight;
