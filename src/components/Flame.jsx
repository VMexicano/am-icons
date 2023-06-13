import React from 'react';
import Flame_ from './../Icons/flame.svg';
const Flame = (props) => {
  return (
    <img src={Flame_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Flame;
