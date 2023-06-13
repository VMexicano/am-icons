import React from 'react';
import CbxDownload_ from './../Icons/cbxDownload.svg';
const CbxDownload = (props) => {
  return (
    <img src={CbxDownload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CbxDownload;
