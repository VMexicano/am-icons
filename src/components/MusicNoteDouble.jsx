import React from 'react';
import MusicNoteDouble_ from './../Icons/musicNoteDouble.svg';
const MusicNoteDouble = (props) => {
  return (
    <img src={MusicNoteDouble_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MusicNoteDouble;
