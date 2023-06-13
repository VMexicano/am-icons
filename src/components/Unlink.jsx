import React from 'react';
import Unlink_ from './../Icons/unlink.svg';
const Unlink = (props) => {
  return (
    <img src={Unlink_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Unlink;
