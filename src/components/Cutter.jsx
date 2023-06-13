import React from 'react';
import Cutter_ from './../Icons/cutter.svg';
const Cutter = (props) => {
  return (
    <img src={Cutter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cutter;
