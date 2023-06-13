import React from 'react';
import Music_ from './../Icons/music.svg';
const Music = (props) => {
  return (
    <img src={Music_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Music;
