import React from 'react';
import Tools_ from './../Icons/tools.svg';
const Tools = (props) => {
  return (
    <img src={Tools_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tools;
