import React from 'react';
import TicketReciptAlt_ from './../Icons/ticketReciptAlt.svg';
const TicketReciptAlt = (props) => {
  return (
    <img src={TicketReciptAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TicketReciptAlt;
