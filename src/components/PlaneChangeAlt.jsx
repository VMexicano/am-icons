import React from 'react';
import PlaneChangeAlt_ from './../Icons/planeChangeAlt.svg';
const PlaneChangeAlt = (props) => {
  return (
    <img src={PlaneChangeAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneChangeAlt;
