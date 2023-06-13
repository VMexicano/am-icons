import React from 'react';
import StarRibboon_ from './../Icons/starRibboon.svg';
const StarRibboon = (props) => {
  return (
    <img src={StarRibboon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StarRibboon;
