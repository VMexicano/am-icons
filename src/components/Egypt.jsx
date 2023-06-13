import React from 'react';
import Egypt_ from './../Icons/egypt.svg';
const Egypt = (props) => {
  return (
    <img src={Egypt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Egypt;
