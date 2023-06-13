import React from 'react';
import TicketWithHand_ from './../Icons/ticketWithHand.svg';
const TicketWithHand = (props) => {
  return (
    <img src={TicketWithHand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TicketWithHand;
