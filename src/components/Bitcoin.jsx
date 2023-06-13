import React from 'react';
import Bitcoin_ from './../Icons/bitcoin.svg';
const Bitcoin = (props) => {
  return (
    <img src={Bitcoin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bitcoin;
