import React from 'react';
import ManWithDog_ from './../Icons/manWithDog.svg';
const ManWithDog = (props) => {
  return (
    <img src={ManWithDog_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ManWithDog;
