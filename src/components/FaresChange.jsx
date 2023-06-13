import React from 'react';
import FaresChange_ from './../Icons/faresChange.svg';
const FaresChange = (props) => {
  return (
    <img src={FaresChange_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresChange;
