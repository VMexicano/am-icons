import React from 'react';
import Theater_ from './../Icons/theater.svg';
const Theater = (props) => {
  return (
    <img src={Theater_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Theater;
