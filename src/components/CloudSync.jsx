import React from 'react';
import CloudSync_ from './../Icons/cloudSync.svg';
const CloudSync = (props) => {
  return (
    <img src={CloudSync_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CloudSync;
