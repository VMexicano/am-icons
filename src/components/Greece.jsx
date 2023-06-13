import React from 'react';
import Greece_ from './../Icons/greece.svg';
const Greece = (props) => {
  return (
    <img src={Greece_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Greece;
