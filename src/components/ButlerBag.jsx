import React from 'react';
import ButlerBag_ from './../Icons/butlerBag.svg';
const ButlerBag = (props) => {
  return (
    <img src={ButlerBag_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ButlerBag;
