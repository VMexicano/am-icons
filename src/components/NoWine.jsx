import React from 'react';
import NoWine_ from './../Icons/noWine.svg';
const NoWine = (props) => {
  return (
    <img src={NoWine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NoWine;
