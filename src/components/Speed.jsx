import React from 'react';
import Speed_ from './../Icons/speed.svg';
const Speed = (props) => {
  return (
    <img src={Speed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Speed;
