import React from 'react';
import Romania_ from './../Icons/romania.svg';
const Romania = (props) => {
  return (
    <img src={Romania_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Romania;
