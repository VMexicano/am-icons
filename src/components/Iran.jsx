import React from 'react';
import Iran_ from './../Icons/iran.svg';
const Iran = (props) => {
  return (
    <img src={Iran_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Iran;
