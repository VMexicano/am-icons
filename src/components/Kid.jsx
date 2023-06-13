import React from 'react';
import Kid_ from './../Icons/kid.svg';
const Kid = (props) => {
  return (
    <img src={Kid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Kid;
