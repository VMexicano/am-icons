import React from 'react';
import FolderFileAlt_ from './../Icons/folderFileAlt.svg';
const FolderFileAlt = (props) => {
  return (
    <img src={FolderFileAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FolderFileAlt;
