import React from 'react';
import Jersey_ from './../Icons/jersey.svg';
const Jersey = (props) => {
  return (
    <img src={Jersey_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Jersey;
