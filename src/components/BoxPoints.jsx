import React from 'react';
import BoxPoints_ from './../Icons/boxPoints.svg';
const BoxPoints = (props) => {
  return (
    <img src={BoxPoints_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BoxPoints;
