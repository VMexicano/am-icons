import React from 'react';
import Toaster_ from './../Icons/toaster.svg';
const Toaster = (props) => {
  return (
    <img src={Toaster_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Toaster;
