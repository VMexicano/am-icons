import React from 'react';
import Heartbeat_ from './../Icons/heartbeat.svg';
const Heartbeat = (props) => {
  return (
    <img src={Heartbeat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Heartbeat;
