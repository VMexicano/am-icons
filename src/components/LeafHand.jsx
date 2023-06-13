import React from 'react';
import LeafHand_ from './../Icons/leafHand.svg';
const LeafHand = (props) => {
  return (
    <img src={LeafHand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafHand;
