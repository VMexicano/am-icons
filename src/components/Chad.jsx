import React from 'react';
import Chad_ from './../Icons/chad.svg';
const Chad = (props) => {
  return (
    <img src={Chad_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chad;
