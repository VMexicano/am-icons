import React from 'react';
import Exit_ from './../Icons/exit.svg';
const Exit = (props) => {
  return (
    <img src={Exit_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Exit;
