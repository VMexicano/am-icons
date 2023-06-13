import React from 'react';
import BowlingBoliche_ from './../Icons/bowlingBoliche.svg';
const BowlingBoliche = (props) => {
  return (
    <img src={BowlingBoliche_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BowlingBoliche;
