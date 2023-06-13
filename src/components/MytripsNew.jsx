import React from 'react';
import MytripsNew_ from './../Icons/mytripsNew.svg';
const MytripsNew = (props) => {
  return (
    <img src={MytripsNew_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MytripsNew;
