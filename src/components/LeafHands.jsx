import React from 'react';
import LeafHands_ from './../Icons/leafHands.svg';
const LeafHands = (props) => {
  return (
    <img src={LeafHands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafHands;
