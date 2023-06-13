import React from 'react';
import ExcelLine_ from './../Icons/excelLine.svg';
const ExcelLine = (props) => {
  return (
    <img src={ExcelLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ExcelLine;
