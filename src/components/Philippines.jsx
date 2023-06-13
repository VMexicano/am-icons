import React from 'react';
import Philippines_ from './../Icons/philippines.svg';
const Philippines = (props) => {
  return (
    <img src={Philippines_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Philippines;
