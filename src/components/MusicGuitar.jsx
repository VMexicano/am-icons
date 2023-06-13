import React from 'react';
import MusicGuitar_ from './../Icons/musicGuitar.svg';
const MusicGuitar = (props) => {
  return (
    <img src={MusicGuitar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MusicGuitar;
