import React from 'react';
import TrafficCone_ from './../Icons/trafficCone.svg';
const TrafficCone = (props) => {
  return (
    <img src={TrafficCone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TrafficCone;
