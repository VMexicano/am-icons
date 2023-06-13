import React from 'react';
import SnorkelDive_ from './../Icons/snorkelDive.svg';
const SnorkelDive = (props) => {
  return (
    <img src={SnorkelDive_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SnorkelDive;
