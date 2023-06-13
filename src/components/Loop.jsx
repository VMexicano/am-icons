import React from 'react';
import Loop_ from './../Icons/loop.svg';
const Loop = (props) => {
  return (
    <img src={Loop_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Loop;
