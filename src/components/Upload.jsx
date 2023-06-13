import React from 'react';
import Upload_ from './../Icons/upload.svg';
const Upload = (props) => {
  return (
    <img src={Upload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Upload;
