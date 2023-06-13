import React from 'react';
import CoinsBillAlt_ from './../Icons/coinsBillAlt.svg';
const CoinsBillAlt = (props) => {
  return (
    <img src={CoinsBillAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CoinsBillAlt;
