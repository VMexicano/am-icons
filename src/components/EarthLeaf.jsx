import React from 'react';
import EarthLeaf_ from './../Icons/earthLeaf.svg';
const EarthLeaf = (props) => {
  return (
    <img src={EarthLeaf_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EarthLeaf;
