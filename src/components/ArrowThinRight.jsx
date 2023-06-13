import React from 'react';
import ArrowThinRight_ from './../Icons/arrowThinRight.svg';
const ArrowThinRight = (props) => {
  return (
    <img src={ArrowThinRight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowThinRight;
