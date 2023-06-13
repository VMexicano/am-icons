import React from 'react';
import UploadSolid_ from './../Icons/uploadSolid.svg';
const UploadSolid = (props) => {
  return (
    <img src={UploadSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UploadSolid;
