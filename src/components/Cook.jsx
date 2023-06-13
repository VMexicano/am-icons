import React from 'react';
import Cook_ from './../Icons/cook.svg';
const Cook = (props) => {
  return (
    <img src={Cook_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cook;
