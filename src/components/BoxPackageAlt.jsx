import React from 'react';
import BoxPackageAlt_ from './../Icons/boxPackageAlt.svg';
const BoxPackageAlt = (props) => {
  return (
    <img src={BoxPackageAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BoxPackageAlt;
