import React from 'react';
import Bee_ from './../Icons/bee.svg';
const Bee = (props) => {
  return (
    <img src={Bee_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bee;
