import React from 'react';
import Trash_ from './../Icons/trash.svg';
const Trash = (props) => {
  return (
    <img src={Trash_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Trash;
