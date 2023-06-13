import React from 'react';
import Parragraph_ from './../Icons/parragraph.svg';
const Parragraph = (props) => {
  return (
    <img src={Parragraph_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Parragraph;
