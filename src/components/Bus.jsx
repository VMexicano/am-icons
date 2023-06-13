import React from 'react';
import Bus_ from './../Icons/bus.svg';
const Bus = (props) => {
  return (
    <img src={Bus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bus;
