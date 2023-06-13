import React from 'react';
import Help_ from './../Icons/help.svg';
const Help = (props) => {
  return (
    <img src={Help_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Help;
