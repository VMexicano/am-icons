import React from 'react';
import PingPong_ from './../Icons/pingPong.svg';
const PingPong = (props) => {
  return (
    <img src={PingPong_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PingPong;
