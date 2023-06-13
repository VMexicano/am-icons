import React from 'react';
import Treadmill_ from './../Icons/treadmill.svg';
const Treadmill = (props) => {
  return (
    <img src={Treadmill_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Treadmill;
