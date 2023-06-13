import React from 'react';
import MulticityLine_ from './../Icons/multicityLine.svg';
const MulticityLine = (props) => {
  return (
    <img src={MulticityLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MulticityLine;
