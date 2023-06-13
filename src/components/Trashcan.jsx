import React from 'react';
import Trashcan_ from './../Icons/trashcan.svg';
const Trashcan = (props) => {
  return (
    <img src={Trashcan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Trashcan;
