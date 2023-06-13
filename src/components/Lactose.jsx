import React from 'react';
import Lactose_ from './../Icons/lactose.svg';
const Lactose = (props) => {
  return (
    <img src={Lactose_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lactose;
