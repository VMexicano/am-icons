import React from 'react';
import BasquetBall_ from './../Icons/basquetBall.svg';
const BasquetBall = (props) => {
  return (
    <img src={BasquetBall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BasquetBall;
