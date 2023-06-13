import React from 'react';
import LeafPlug_ from './../Icons/leafPlug.svg';
const LeafPlug = (props) => {
  return (
    <img src={LeafPlug_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafPlug;
