import React from 'react';
import Madeira_ from './../Icons/madeira.svg';
const Madeira = (props) => {
  return (
    <img src={Madeira_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Madeira;
