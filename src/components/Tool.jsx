import React from 'react';
import Tool_ from './../Icons/tool.svg';
const Tool = (props) => {
  return (
    <img src={Tool_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tool;
