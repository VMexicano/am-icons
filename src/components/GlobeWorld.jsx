import React from 'react';
import GlobeWorld_ from './../Icons/globeWorld.svg';
const GlobeWorld = (props) => {
  return (
    <img src={GlobeWorld_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GlobeWorld;
