import React from 'react';
import Link_ from './../Icons/link.svg';
const Link = (props) => {
  return (
    <img src={Link_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Link;
