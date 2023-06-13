import React from 'react';
import Gift_ from './../Icons/gift.svg';
const Gift = (props) => {
  return (
    <img src={Gift_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Gift;
