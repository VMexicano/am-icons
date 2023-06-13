import React from 'react';
import MouseAlt_ from './../Icons/mouseAlt.svg';
const MouseAlt = (props) => {
  return (
    <img src={MouseAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MouseAlt;
