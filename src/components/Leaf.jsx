import React from 'react';
import Leaf_ from './../Icons/leaf.svg';
const Leaf = (props) => {
  return (
    <img src={Leaf_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Leaf;
