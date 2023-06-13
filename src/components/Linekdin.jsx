import React from 'react';
import Linekdin_ from './../Icons/linekdin.svg';
const Linekdin = (props) => {
  return (
    <img src={Linekdin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Linekdin;
