import React from 'react';
import BonfireCooking_ from './../Icons/bonfireCooking.svg';
const BonfireCooking = (props) => {
  return (
    <img src={BonfireCooking_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BonfireCooking;
