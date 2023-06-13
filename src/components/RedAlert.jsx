import React from 'react';
import RedAlert_ from './../Icons/redAlert.svg';
const RedAlert = (props) => {
  return (
    <img src={RedAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RedAlert;
