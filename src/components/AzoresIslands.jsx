import React from 'react';
import AzoresIslands_ from './../Icons/azoresIslands.svg';
const AzoresIslands = (props) => {
  return (
    <img src={AzoresIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AzoresIslands;
