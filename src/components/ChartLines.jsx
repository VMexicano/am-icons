import React from 'react';
import ChartLines_ from './../Icons/chartLines.svg';
const ChartLines = (props) => {
  return (
    <img src={ChartLines_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChartLines;
