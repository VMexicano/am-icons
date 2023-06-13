import React from 'react';
import Paper_ from './../Icons/paper.svg';
const Paper = (props) => {
  return (
    <img src={Paper_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Paper;
