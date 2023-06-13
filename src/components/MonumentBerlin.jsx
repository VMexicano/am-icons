import React from 'react';
import MonumentBerlin_ from './../Icons/monumentBerlin.svg';
const MonumentBerlin = (props) => {
  return (
    <img src={MonumentBerlin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MonumentBerlin;
