import React from 'react';
import NoFirearms_ from './../Icons/noFirearms.svg';
const NoFirearms = (props) => {
  return (
    <img src={NoFirearms_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NoFirearms;
