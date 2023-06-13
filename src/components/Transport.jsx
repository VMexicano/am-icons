import React from 'react';
import Transport_ from './../Icons/transport.svg';
const Transport = (props) => {
  return (
    <img src={Transport_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Transport;
