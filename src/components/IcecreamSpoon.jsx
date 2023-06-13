import React from 'react';
import IcecreamSpoon_ from './../Icons/icecreamSpoon.svg';
const IcecreamSpoon = (props) => {
  return (
    <img src={IcecreamSpoon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default IcecreamSpoon;
