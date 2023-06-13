import React from 'react';
import Window_ from './../Icons/window.svg';
const Window = (props) => {
  return (
    <img src={Window_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Window;
