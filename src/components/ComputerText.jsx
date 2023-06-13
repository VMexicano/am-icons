import React from 'react';
import ComputerText_ from './../Icons/computerText.svg';
const ComputerText = (props) => {
  return (
    <img src={ComputerText_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerText;
