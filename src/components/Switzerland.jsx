import React from 'react';
import Switzerland_ from './../Icons/switzerland.svg';
const Switzerland = (props) => {
  return (
    <img src={Switzerland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Switzerland;
