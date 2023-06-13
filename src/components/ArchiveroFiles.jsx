import React from 'react';
import ArchiveroFiles_ from './../Icons/archiveroFiles.svg';
const ArchiveroFiles = (props) => {
  return (
    <img src={ArchiveroFiles_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArchiveroFiles;
