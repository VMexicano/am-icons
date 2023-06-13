import React from 'react';
import Toggle_ from './../Icons/toggle.svg';
const Toggle = (props) => {
  return (
    <img src={Toggle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Toggle;
