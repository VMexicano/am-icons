import React from 'react';
import Compass_ from './../Icons/compass.svg';
const Compass = (props) => {
  return (
    <img src={Compass_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Compass;
