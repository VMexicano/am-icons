import React from 'react';
import ClipboardCheck_ from './../Icons/clipboardCheck.svg';
const ClipboardCheck = (props) => {
  return (
    <img src={ClipboardCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ClipboardCheck;
