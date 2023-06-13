import React from 'react';
import WorldLines_ from './../Icons/worldLines.svg';
const WorldLines = (props) => {
  return (
    <img src={WorldLines_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WorldLines;
