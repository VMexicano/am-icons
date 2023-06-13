import React from 'react';
import FaroeIslands_ from './../Icons/faroeIslands.svg';
const FaroeIslands = (props) => {
  return (
    <img src={FaroeIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaroeIslands;
