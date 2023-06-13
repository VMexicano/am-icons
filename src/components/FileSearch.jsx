import React from 'react';
import FileSearch_ from './../Icons/fileSearch.svg';
const FileSearch = (props) => {
  return (
    <img src={FileSearch_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FileSearch;
