import React from 'react';
import TeethAlt_ from './../Icons/teethAlt.svg';
const TeethAlt = (props) => {
  return (
    <img src={TeethAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TeethAlt;
