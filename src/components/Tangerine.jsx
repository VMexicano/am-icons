import React from 'react';
import Tangerine_ from './../Icons/tangerine.svg';
const Tangerine = (props) => {
  return (
    <img src={Tangerine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tangerine;
