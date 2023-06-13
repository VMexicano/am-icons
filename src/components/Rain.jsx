import React from 'react';
import Rain_ from './../Icons/rain.svg';
const Rain = (props) => {
  return (
    <img src={Rain_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Rain;
