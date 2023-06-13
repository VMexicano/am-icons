import React from 'react';
import Ecuador_ from './../Icons/ecuador.svg';
const Ecuador = (props) => {
  return (
    <img src={Ecuador_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ecuador;
