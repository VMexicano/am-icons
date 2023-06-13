import React from 'react';
import Boy_ from './../Icons/boy.svg';
const Boy = (props) => {
  return (
    <img src={Boy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Boy;
