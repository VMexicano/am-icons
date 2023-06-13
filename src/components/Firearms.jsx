import React from 'react';
import Firearms_ from './../Icons/firearms.svg';
const Firearms = (props) => {
  return (
    <img src={Firearms_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Firearms;
