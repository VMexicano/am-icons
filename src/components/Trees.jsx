import React from 'react';
import Trees_ from './../Icons/trees.svg';
const Trees = (props) => {
  return (
    <img src={Trees_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Trees;
