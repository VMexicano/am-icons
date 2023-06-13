import React from 'react';
import Austria_ from './../Icons/austria.svg';
const Austria = (props) => {
  return (
    <img src={Austria_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Austria;
