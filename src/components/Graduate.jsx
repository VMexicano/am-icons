import React from 'react';
import Graduate_ from './../Icons/graduate.svg';
const Graduate = (props) => {
  return (
    <img src={Graduate_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Graduate;
