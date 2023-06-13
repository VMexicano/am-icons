import React from 'react';
import WesternSahara_ from './../Icons/westernSahara.svg';
const WesternSahara = (props) => {
  return (
    <img src={WesternSahara_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WesternSahara;
