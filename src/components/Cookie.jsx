import React from 'react';
import Cookie_ from './../Icons/cookie.svg';
const Cookie = (props) => {
  return (
    <img src={Cookie_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cookie;
