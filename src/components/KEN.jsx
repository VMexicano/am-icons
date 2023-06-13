import React from 'react';
import KEN_ from './../Icons/kEN.svg';
const KEN = (props) => {
  return (
    <img src={KEN_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default KEN;
