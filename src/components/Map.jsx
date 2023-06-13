import React from 'react';
import Map_ from './../Icons/map.svg';
const Map = (props) => {
  return (
    <img src={Map_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Map;
