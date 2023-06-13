import React from 'react';
import NorthKorea_ from './../Icons/northKorea.svg';
const NorthKorea = (props) => {
  return (
    <img src={NorthKorea_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NorthKorea;
