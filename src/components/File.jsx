import React from 'react';
import File_ from './../Icons/file.svg';
const File = (props) => {
  return (
    <img src={File_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default File;
