import React from 'react';
import NotesChecklist_ from './../Icons/notesChecklist.svg';
const NotesChecklist = (props) => {
  return (
    <img src={NotesChecklist_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotesChecklist;
