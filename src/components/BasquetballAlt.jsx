import React from 'react';
import BasquetballAlt_ from './../Icons/basquetballAlt.svg';
const BasquetballAlt = (props) => {
  return (
    <img src={BasquetballAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BasquetballAlt;
