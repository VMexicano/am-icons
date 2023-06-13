import React from 'react';
import CloudDownload_ from './../Icons/cloudDownload.svg';
const CloudDownload = (props) => {
  return (
    <img src={CloudDownload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CloudDownload;
