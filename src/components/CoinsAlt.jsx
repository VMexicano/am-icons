import React from 'react';
import CoinsAlt_ from './../Icons/coinsAlt.svg';
const CoinsAlt = (props) => {
  return (
    <img src={CoinsAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CoinsAlt;
