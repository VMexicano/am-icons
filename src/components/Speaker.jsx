import React from 'react';
import Speaker_ from './../Icons/speaker.svg';
const Speaker = (props) => {
  return (
    <img src={Speaker_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Speaker;
