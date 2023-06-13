import React from 'react';
import Popcorn_ from './../Icons/popcorn.svg';
const Popcorn = (props) => {
  return (
    <img src={Popcorn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Popcorn;
