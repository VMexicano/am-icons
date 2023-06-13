import React from 'react';
import Chemistry_ from './../Icons/chemistry.svg';
const Chemistry = (props) => {
  return (
    <img src={Chemistry_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chemistry;
