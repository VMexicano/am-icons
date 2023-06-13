import React from 'react';
import Norway_ from './../Icons/norway.svg';
const Norway = (props) => {
  return (
    <img src={Norway_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Norway;
