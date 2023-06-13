import React from 'react';
import ForestBench_ from './../Icons/forestBench.svg';
const ForestBench = (props) => {
  return (
    <img src={ForestBench_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ForestBench;
