import React from 'react';
import TreesCloud_ from './../Icons/treesCloud.svg';
const TreesCloud = (props) => {
  return (
    <img src={TreesCloud_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TreesCloud;
