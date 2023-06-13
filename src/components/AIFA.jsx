import React from 'react';
import AIFA_ from './../Icons/aIFA.svg';
const AIFA = (props) => {
  return (
    <img src={AIFA_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AIFA;
