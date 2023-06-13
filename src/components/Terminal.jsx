import React from 'react';
import Terminal_ from './../Icons/terminal.svg';
const Terminal = (props) => {
  return (
    <img src={Terminal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Terminal;
