import React from 'react';
import HongKong_ from './../Icons/hongKong.svg';
const HongKong = (props) => {
  return (
    <img src={HongKong_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HongKong;
