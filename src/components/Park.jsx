import React from 'react';
import Park_ from './../Icons/park.svg';
const Park = (props) => {
  return (
    <img src={Park_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Park;
