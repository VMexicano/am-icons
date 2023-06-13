import React from 'react';
import Bahamas_ from './../Icons/bahamas.svg';
const Bahamas = (props) => {
  return (
    <img src={Bahamas_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bahamas;
