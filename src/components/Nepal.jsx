import React from 'react';
import Nepal_ from './../Icons/nepal.svg';
const Nepal = (props) => {
  return (
    <img src={Nepal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Nepal;
