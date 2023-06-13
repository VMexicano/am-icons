import React from 'react';
import DownloadSolid_ from './../Icons/downloadSolid.svg';
const DownloadSolid = (props) => {
  return (
    <img src={DownloadSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DownloadSolid;
