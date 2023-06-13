import React from 'react';
import ArrowSHoz_ from './../Icons/arrowSHoz.svg';
const ArrowSHoz = (props) => {
  return (
    <img src={ArrowSHoz_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSHoz;
