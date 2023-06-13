import React from 'react';
import Bolivia_ from './../Icons/bolivia.svg';
const Bolivia = (props) => {
  return (
    <img src={Bolivia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bolivia;
