import React from 'react';
import Snapchat_ from './../Icons/snapchat.svg';
const Snapchat = (props) => {
  return (
    <img src={Snapchat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Snapchat;
