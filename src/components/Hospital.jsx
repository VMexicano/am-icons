import React from 'react';
import Hospital_ from './../Icons/hospital.svg';
const Hospital = (props) => {
  return (
    <img src={Hospital_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hospital;
