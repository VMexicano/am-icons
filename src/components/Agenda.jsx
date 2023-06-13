import React from 'react';
import Agenda_ from './../Icons/agenda.svg';
const Agenda = (props) => {
  return (
    <img src={Agenda_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Agenda;
