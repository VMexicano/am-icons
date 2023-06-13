import React from 'react';
import NeedHelp_ from './../Icons/needHelp.svg';
const NeedHelp = (props) => {
  return (
    <img src={NeedHelp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NeedHelp;
