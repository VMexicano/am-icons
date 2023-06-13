import React from 'react';
import IconDelete_ from './../Icons/iconDelete.svg';
const IconDelete = (props) => {
  return (
    <img src={IconDelete_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default IconDelete;
