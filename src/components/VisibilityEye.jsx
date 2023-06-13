import React from 'react';
import VisibilityEye_ from './../Icons/visibilityEye.svg';
const VisibilityEye = (props) => {
  return (
    <img src={VisibilityEye_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VisibilityEye;
