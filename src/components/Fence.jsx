import React from 'react';
import Fence_ from './../Icons/fence.svg';
const Fence = (props) => {
  return (
    <img src={Fence_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fence;
