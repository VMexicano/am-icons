import React from 'react';
import StackOfPapers_ from './../Icons/stackOfPapers.svg';
const StackOfPapers = (props) => {
  return (
    <img src={StackOfPapers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StackOfPapers;
