import React from 'react';
import AgendaDocuments_ from './../Icons/agendaDocuments.svg';
const AgendaDocuments = (props) => {
  return (
    <img src={AgendaDocuments_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AgendaDocuments;
