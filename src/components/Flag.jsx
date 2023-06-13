import React from 'react';
import Flag_ from './../Icons/flag.svg';
const Flag = (props) => {
  return (
    <img src={Flag_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Flag;
