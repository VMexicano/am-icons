import React from 'react';
import FileChecklist_ from './../Icons/fileChecklist.svg';
const FileChecklist = (props) => {
  return (
    <img src={FileChecklist_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FileChecklist;
