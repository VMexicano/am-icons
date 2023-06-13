import React from 'react';
import Tree_ from './../Icons/tree.svg';
const Tree = (props) => {
  return (
    <img src={Tree_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tree;
