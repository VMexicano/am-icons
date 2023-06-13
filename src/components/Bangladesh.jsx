import React from 'react';
import Bangladesh_ from './../Icons/bangladesh.svg';
const Bangladesh = (props) => {
  return (
    <img src={Bangladesh_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bangladesh;
