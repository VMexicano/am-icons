import React from 'react';
import Tambor_ from './../Icons/tambor.svg';
const Tambor = (props) => {
  return (
    <img src={Tambor_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tambor;
