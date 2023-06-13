import React from 'react';
import StoreAlt_ from './../Icons/storeAlt.svg';
const StoreAlt = (props) => {
  return (
    <img src={StoreAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StoreAlt;
