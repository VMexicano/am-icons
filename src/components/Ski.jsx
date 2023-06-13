import React from 'react';
import Ski_ from './../Icons/ski.svg';
const Ski = (props) => {
  return (
    <img src={Ski_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ski;
