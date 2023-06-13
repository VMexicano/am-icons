import React from 'react';
import Scroll_ from './../Icons/scroll.svg';
const Scroll = (props) => {
  return (
    <img src={Scroll_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Scroll;
