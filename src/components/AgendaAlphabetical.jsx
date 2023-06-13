import React from 'react';
import AgendaAlphabetical_ from './../Icons/agendaAlphabetical.svg';
const AgendaAlphabetical = (props) => {
  return (
    <img src={AgendaAlphabetical_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AgendaAlphabetical;
