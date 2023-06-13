import React from 'react';
import FolderKey_ from './../Icons/folderKey.svg';
const FolderKey = (props) => {
  return (
    <img src={FolderKey_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FolderKey;
