import React from 'react';
import CV_ from './../Icons/cV.svg';
const CV = (props) => {
  return (
    <img src={CV_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CV;
