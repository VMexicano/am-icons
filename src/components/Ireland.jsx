import React from 'react';
import Ireland_ from './../Icons/ireland.svg';
const Ireland = (props) => {
  return (
    <img src={Ireland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ireland;
