import React from 'react';
import Nicaragua_ from './../Icons/nicaragua.svg';
const Nicaragua = (props) => {
  return (
    <img src={Nicaragua_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Nicaragua;
