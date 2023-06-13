import React from 'react';
import ComputerCheck_ from './../Icons/computerCheck.svg';
const ComputerCheck = (props) => {
  return (
    <img src={ComputerCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerCheck;
