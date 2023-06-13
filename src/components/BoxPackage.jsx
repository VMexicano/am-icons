import React from 'react';
import BoxPackage_ from './../Icons/boxPackage.svg';
const BoxPackage = (props) => {
  return (
    <img src={BoxPackage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BoxPackage;
