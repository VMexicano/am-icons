import React from 'react';
import ProhibitionSignStops_ from './../Icons/prohibitionSignStops.svg';
const ProhibitionSignStops = (props) => {
  return (
    <img src={ProhibitionSignStops_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProhibitionSignStops;
