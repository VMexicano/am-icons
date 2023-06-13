import React from 'react';
import SharealtLine_ from './../Icons/sharealtLine.svg';
const SharealtLine = (props) => {
  return (
    <img src={SharealtLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SharealtLine;
