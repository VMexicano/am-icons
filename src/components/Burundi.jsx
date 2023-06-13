import React from 'react';
import Burundi_ from './../Icons/burundi.svg';
const Burundi = (props) => {
  return (
    <img src={Burundi_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Burundi;
