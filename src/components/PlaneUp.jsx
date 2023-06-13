import React from 'react';
import PlaneUp_ from './../Icons/planeUp.svg';
const PlaneUp = (props) => {
  return (
    <img src={PlaneUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneUp;
