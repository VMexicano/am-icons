import React from 'react';
import WorldHand_ from './../Icons/worldHand.svg';
const WorldHand = (props) => {
  return (
    <img src={WorldHand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WorldHand;
