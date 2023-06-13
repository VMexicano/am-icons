import React from 'react';
import TenisBall_ from './../Icons/tenisBall.svg';
const TenisBall = (props) => {
  return (
    <img src={TenisBall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TenisBall;
