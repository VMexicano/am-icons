import React from 'react';
import Guernsey_ from './../Icons/guernsey.svg';
const Guernsey = (props) => {
  return (
    <img src={Guernsey_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Guernsey;
