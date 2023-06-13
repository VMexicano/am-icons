import React from 'react';
import Family_ from './../Icons/family.svg';
const Family = (props) => {
  return (
    <img src={Family_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Family;
