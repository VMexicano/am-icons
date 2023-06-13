import React from 'react';
import NotesAlt_ from './../Icons/notesAlt.svg';
const NotesAlt = (props) => {
  return (
    <img src={NotesAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotesAlt;
