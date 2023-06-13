import React from 'react';
import Marker_ from './../Icons/marker.svg';
const Marker = (props) => {
  return (
    <img src={Marker_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Marker;
