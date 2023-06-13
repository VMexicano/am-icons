import React from 'react';
import Plane_ from './../Icons/plane.svg';
const Plane = (props) => {
  return (
    <img src={Plane_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Plane;
