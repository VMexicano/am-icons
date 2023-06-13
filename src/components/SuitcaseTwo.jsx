import React from 'react';
import SuitcaseTwo_ from './../Icons/suitcaseTwo.svg';
const SuitcaseTwo = (props) => {
  return (
    <img src={SuitcaseTwo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SuitcaseTwo;
