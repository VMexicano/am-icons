import React from 'react';
import Videogame_ from './../Icons/videogame.svg';
const Videogame = (props) => {
  return (
    <img src={Videogame_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Videogame;
