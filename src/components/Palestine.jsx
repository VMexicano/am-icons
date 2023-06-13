import React from 'react';
import Palestine_ from './../Icons/palestine.svg';
const Palestine = (props) => {
  return (
    <img src={Palestine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Palestine;
