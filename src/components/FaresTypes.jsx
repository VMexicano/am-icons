import React from 'react';
import FaresTypes_ from './../Icons/faresTypes.svg';
const FaresTypes = (props) => {
  return (
    <img src={FaresTypes_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresTypes;
