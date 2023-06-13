import React from 'react';
import Bath_ from './../Icons/bath.svg';
const Bath = (props) => {
  return (
    <img src={Bath_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bath;
