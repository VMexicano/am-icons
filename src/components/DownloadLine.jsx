import React from 'react';
import DownloadLine_ from './../Icons/downloadLine.svg';
const DownloadLine = (props) => {
  return (
    <img src={DownloadLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DownloadLine;
