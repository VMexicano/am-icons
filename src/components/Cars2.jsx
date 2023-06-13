import React from 'react';
import Cars2_ from './../Icons/cars2.svg';
const Cars2 = (props) => {
  return (
    <img src={Cars2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cars2;
