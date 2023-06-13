import React from 'react';
import Printer_ from './../Icons/printer.svg';
const Printer = (props) => {
  return (
    <img src={Printer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Printer;
