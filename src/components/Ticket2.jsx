import React from 'react';
import Ticket2_ from './../Icons/ticket2.svg';
const Ticket2 = (props) => {
  return (
    <img src={Ticket2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ticket2;
