import React from 'react';
import Browser_ from './../Icons/browser.svg';
const Browser = (props) => {
  return (
    <img src={Browser_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Browser;
