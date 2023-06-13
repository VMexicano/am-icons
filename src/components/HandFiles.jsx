import React from 'react';
import HandFiles_ from './../Icons/handFiles.svg';
const HandFiles = (props) => {
  return (
    <img src={HandFiles_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandFiles;
