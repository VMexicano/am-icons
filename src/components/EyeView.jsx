import React from 'react';
import EyeView_ from './../Icons/eyeView.svg';
const EyeView = (props) => {
  return (
    <img src={EyeView_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EyeView;
