import React from 'react';
import VirginIslands_ from './../Icons/virginIslands.svg';
const VirginIslands = (props) => {
  return (
    <img src={VirginIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VirginIslands;
