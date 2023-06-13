import React from 'react';
import CircleMan_ from './../Icons/circleMan.svg';
const CircleMan = (props) => {
  return (
    <img src={CircleMan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CircleMan;
