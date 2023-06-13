import React from 'react';
import Egg_ from './../Icons/egg.svg';
const Egg = (props) => {
  return (
    <img src={Egg_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Egg;
