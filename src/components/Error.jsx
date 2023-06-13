import React from 'react';
import Error_ from './../Icons/error.svg';
const Error = (props) => {
  return (
    <img src={Error_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Error;
