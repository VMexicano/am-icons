import React from 'react';
import CapeVerde_ from './../Icons/capeVerde.svg';
const CapeVerde = (props) => {
  return (
    <img src={CapeVerde_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CapeVerde;
