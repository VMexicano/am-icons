import React from 'react';
import CloudUpload_ from './../Icons/cloudUpload.svg';
const CloudUpload = (props) => {
  return (
    <img src={CloudUpload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CloudUpload;
