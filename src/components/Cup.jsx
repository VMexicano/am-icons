import React from 'react';
import Cup_ from './../Icons/cup.svg';
const Cup = (props) => {
  return (
    <img src={Cup_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cup;
