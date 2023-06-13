import React from 'react';
import SVI_ from './../Icons/sVI.svg';
const SVI = (props) => {
  return (
    <img src={SVI_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SVI;
