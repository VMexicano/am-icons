import React from 'react';
import RightSmall_ from './../Icons/rightSmall.svg';
const RightSmall = (props) => {
  return (
    <img src={RightSmall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RightSmall;
