import React from 'react';
import HandBag_ from './../Icons/handBag.svg';
const HandBag = (props) => {
  return (
    <img src={HandBag_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandBag;
