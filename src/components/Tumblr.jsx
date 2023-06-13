import React from 'react';
import Tumblr_ from './../Icons/tumblr.svg';
const Tumblr = (props) => {
  return (
    <img src={Tumblr_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tumblr;
