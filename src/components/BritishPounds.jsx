import React from 'react';
import BritishPounds_ from './../Icons/britishPounds.svg';
const BritishPounds = (props) => {
  return (
    <img src={BritishPounds_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BritishPounds;
