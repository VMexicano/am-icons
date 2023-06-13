import React from 'react';
import Files_ from './../Icons/files.svg';
const Files = (props) => {
  return (
    <img src={Files_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Files;
