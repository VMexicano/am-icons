import React from 'react';
import Benin_ from './../Icons/benin.svg';
const Benin = (props) => {
  return (
    <img src={Benin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Benin;
