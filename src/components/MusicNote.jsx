import React from 'react';
import MusicNote_ from './../Icons/musicNote.svg';
const MusicNote = (props) => {
  return (
    <img src={MusicNote_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MusicNote;
