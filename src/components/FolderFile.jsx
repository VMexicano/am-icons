import React from 'react';
import FolderFile_ from './../Icons/folderFile.svg';
const FolderFile = (props) => {
  return (
    <img src={FolderFile_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FolderFile;
