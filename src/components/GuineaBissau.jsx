import React from 'react';
import GuineaBissau_ from './../Icons/guineaBissau.svg';
const GuineaBissau = (props) => {
  return (
    <img src={GuineaBissau_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GuineaBissau;
