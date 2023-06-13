import React from 'react';
import EyeViewFilled_ from './../Icons/eyeViewFilled.svg';
const EyeViewFilled = (props) => {
  return (
    <img src={EyeViewFilled_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EyeViewFilled;
