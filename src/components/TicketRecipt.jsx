import React from 'react';
import TicketRecipt_ from './../Icons/ticketRecipt.svg';
const TicketRecipt = (props) => {
  return (
    <img src={TicketRecipt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TicketRecipt;
