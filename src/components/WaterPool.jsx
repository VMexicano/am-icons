import React from 'react';
import WaterPool_ from './../Icons/waterPool.svg';
const WaterPool = (props) => {
  return (
    <img src={WaterPool_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WaterPool;
