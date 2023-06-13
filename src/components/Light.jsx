import React from 'react';
import Light_ from './../Icons/light.svg';
const Light = (props) => {
  return (
    <img src={Light_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Light;
