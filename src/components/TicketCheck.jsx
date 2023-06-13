import React from 'react';
import TicketCheck_ from './../Icons/ticketCheck.svg';
const TicketCheck = (props) => {
  return (
    <img src={TicketCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TicketCheck;
