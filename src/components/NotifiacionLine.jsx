import React from 'react';
import NotifiacionLine_ from './../Icons/notifiacionLine.svg';
const NotifiacionLine = (props) => {
  return (
    <img src={NotifiacionLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotifiacionLine;
