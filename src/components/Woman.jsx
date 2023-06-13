import React from 'react';
import Woman_ from './../Icons/woman.svg';
const Woman = (props) => {
  return (
    <img src={Woman_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Woman;
