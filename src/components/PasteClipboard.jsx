import React from 'react';
import PasteClipboard_ from './../Icons/pasteClipboard.svg';
const PasteClipboard = (props) => {
  return (
    <img src={PasteClipboard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PasteClipboard;
