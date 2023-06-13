import React from 'react';
import PrintLine_ from './../Icons/printLine.svg';
const PrintLine = (props) => {
  return (
    <img src={PrintLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PrintLine;
