import React from 'react';
import Shell_ from './../Icons/shell.svg';
const Shell = (props) => {
  return (
    <img src={Shell_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Shell;
