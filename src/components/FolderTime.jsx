import React from 'react';
import FolderTime_ from './../Icons/folderTime.svg';
const FolderTime = (props) => {
  return (
    <img src={FolderTime_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FolderTime;
