import React from 'react';
import ShareLine_ from './../Icons/shareLine.svg';
const ShareLine = (props) => {
  return (
    <img src={ShareLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShareLine;
