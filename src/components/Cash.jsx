import React from 'react';
import Cash_ from './../Icons/cash.svg';
const Cash = (props) => {
  return (
    <img src={Cash_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cash;
