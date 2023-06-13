import React from 'react';
import ComputerCloud_ from './../Icons/computerCloud.svg';
const ComputerCloud = (props) => {
  return (
    <img src={ComputerCloud_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerCloud;
