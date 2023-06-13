import React from 'react';
import DoNotDistrub_ from './../Icons/doNotDistrub.svg';
const DoNotDistrub = (props) => {
  return (
    <img src={DoNotDistrub_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DoNotDistrub;
