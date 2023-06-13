import React from 'react';
import Download_ from './../Icons/download.svg';
const Download = (props) => {
  return (
    <img src={Download_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Download;
