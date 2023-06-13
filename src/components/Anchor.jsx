import React from 'react';
import Anchor_ from './../Icons/anchor.svg';
const Anchor = (props) => {
  return (
    <img src={Anchor_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Anchor;
