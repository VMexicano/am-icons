import React from 'react';
import Whatsapp_ from './../Icons/whatsapp.svg';
const Whatsapp = (props) => {
  return (
    <img src={Whatsapp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Whatsapp;
