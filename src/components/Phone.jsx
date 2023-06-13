import React from 'react';
import Phone_ from './../Icons/phone.svg';
const Phone = (props) => {
  return (
    <img src={Phone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Phone;
