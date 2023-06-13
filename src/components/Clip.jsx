import React from 'react';
import Clip_ from './../Icons/clip.svg';
const Clip = (props) => {
  return (
    <img src={Clip_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clip;
