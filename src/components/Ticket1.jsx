import React from 'react';
import Ticket1_ from './../Icons/ticket1.svg';
const Ticket1 = (props) => {
  return (
    <img src={Ticket1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ticket1;
