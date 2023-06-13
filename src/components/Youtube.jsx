import React from 'react';
import Youtube_ from './../Icons/youtube.svg';
const Youtube = (props) => {
  return (
    <img src={Youtube_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Youtube;
