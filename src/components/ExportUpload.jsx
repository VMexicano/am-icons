import React from 'react';
import ExportUpload_ from './../Icons/exportUpload.svg';
const ExportUpload = (props) => {
  return (
    <img src={ExportUpload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ExportUpload;
