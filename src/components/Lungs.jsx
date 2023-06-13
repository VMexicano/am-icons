import React from 'react';
import Lungs_ from './../Icons/lungs.svg';
const Lungs = (props) => {
  return (
    <img src={Lungs_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lungs;
