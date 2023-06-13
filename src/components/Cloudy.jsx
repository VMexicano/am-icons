import React from 'react';
import Cloudy_ from './../Icons/cloudy.svg';
const Cloudy = (props) => {
  return (
    <img src={Cloudy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cloudy;
