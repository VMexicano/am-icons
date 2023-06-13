import React from 'react';
import CheckedBaggage_ from './../Icons/checkedBaggage.svg';
const CheckedBaggage = (props) => {
  return (
    <img src={CheckedBaggage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckedBaggage;
