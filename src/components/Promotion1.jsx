import React from 'react';
import Promotion1_ from './../Icons/promotion1.svg';
const Promotion1 = (props) => {
  return (
    <img src={Promotion1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Promotion1;
