import React from 'react';
import Store_ from './../Icons/store.svg';
const Store = (props) => {
  return (
    <img src={Store_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Store;
