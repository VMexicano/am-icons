import React from 'react';
import ExitLine_ from './../Icons/exitLine.svg';
const ExitLine = (props) => {
  return (
    <img src={ExitLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ExitLine;
