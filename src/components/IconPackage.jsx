import React from 'react';
import IconPackage_ from './../Icons/iconPackage.svg';
const IconPackage = (props) => {
  return (
    <img src={IconPackage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default IconPackage;
