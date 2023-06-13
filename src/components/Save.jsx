import React from 'react';
import Save_ from './../Icons/save.svg';
const Save = (props) => {
  return (
    <img src={Save_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Save;
