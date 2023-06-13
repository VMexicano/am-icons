import React from 'react';
import DutyfreeIcon_ from './../Icons/dutyfreeIcon.svg';
const DutyfreeIcon = (props) => {
  return (
    <img src={DutyfreeIcon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DutyfreeIcon;
