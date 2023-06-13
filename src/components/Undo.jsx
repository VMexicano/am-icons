import React from 'react';
import Undo_ from './../Icons/undo.svg';
const Undo = (props) => {
  return (
    <img src={Undo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Undo;
