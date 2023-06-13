import React from 'react';
import SearchFolderFile_ from './../Icons/searchFolderFile.svg';
const SearchFolderFile = (props) => {
  return (
    <img src={SearchFolderFile_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SearchFolderFile;
