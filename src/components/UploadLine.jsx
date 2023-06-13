import React from 'react';
import UploadLine_ from './../Icons/uploadLine.svg';
const UploadLine = (props) => {
  return (
    <img src={UploadLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UploadLine;
