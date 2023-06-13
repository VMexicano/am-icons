import React from 'react';
import BumFireAlt_ from './../Icons/bumFireAlt.svg';
const BumFireAlt = (props) => {
  return (
    <img src={BumFireAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BumFireAlt;
