import React from 'react';
import Ticket_ from './../Icons/ticket.svg';
const Ticket = (props) => {
  return (
    <img src={Ticket_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ticket;
