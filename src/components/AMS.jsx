import React from 'react';
import AMS_ from './../Icons/aMS.svg';
const AMS = (props) => {
  return (
    <img src={AMS_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AMS;
