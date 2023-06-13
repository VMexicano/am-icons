import React from 'react';
import Trophy_ from './../Icons/trophy.svg';
const Trophy = (props) => {
  return (
    <img src={Trophy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Trophy;
