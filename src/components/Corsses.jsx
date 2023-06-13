import React from 'react';
import Corsses_ from './../Icons/corsses.svg';
const Corsses = (props) => {
  return (
    <img src={Corsses_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Corsses;
