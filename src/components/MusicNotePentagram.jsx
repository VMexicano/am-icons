import React from 'react';
import MusicNotePentagram_ from './../Icons/musicNotePentagram.svg';
const MusicNotePentagram = (props) => {
  return (
    <img src={MusicNotePentagram_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MusicNotePentagram;
