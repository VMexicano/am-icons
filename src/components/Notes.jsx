import React from 'react';
import Notes_ from './../Icons/notes.svg';
const Notes = (props) => {
  return (
    <img src={Notes_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Notes;
