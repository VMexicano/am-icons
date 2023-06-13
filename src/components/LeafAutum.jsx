import React from 'react';
import LeafAutum_ from './../Icons/leafAutum.svg';
const LeafAutum = (props) => {
  return (
    <img src={LeafAutum_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafAutum;
