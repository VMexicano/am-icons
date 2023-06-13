import React from 'react';
import Umbrella_ from './../Icons/umbrella.svg';
const Umbrella = (props) => {
  return (
    <img src={Umbrella_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Umbrella;
