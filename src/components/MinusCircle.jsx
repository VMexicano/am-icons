import React from 'react';
import MinusCircle_ from './../Icons/minusCircle.svg';
const MinusCircle = (props) => {
  return (
    <img src={MinusCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MinusCircle;
