import React from 'react';
import TrafficLightsSemaforo_ from './../Icons/trafficLightsSemaforo.svg';
const TrafficLightsSemaforo = (props) => {
  return (
    <img src={TrafficLightsSemaforo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TrafficLightsSemaforo;
