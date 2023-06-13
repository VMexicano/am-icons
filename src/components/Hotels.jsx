import React from 'react';
import Hotels_ from './../Icons/hotels.svg';
const Hotels = (props) => {
  return (
    <img src={Hotels_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hotels;
