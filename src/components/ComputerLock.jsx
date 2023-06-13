import React from 'react';
import ComputerLock_ from './../Icons/computerLock.svg';
const ComputerLock = (props) => {
  return (
    <img src={ComputerLock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerLock;
