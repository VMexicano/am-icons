import React from 'react';
import Italy_ from './../Icons/italy.svg';
const Italy = (props) => {
  return (
    <img src={Italy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Italy;
