import React from 'react';
import Clipboard_ from './../Icons/clipboard.svg';
const Clipboard = (props) => {
  return (
    <img src={Clipboard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clipboard;
