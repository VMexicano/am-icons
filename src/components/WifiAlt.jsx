import React from 'react';
import WifiAlt_ from './../Icons/wifiAlt.svg';
const WifiAlt = (props) => {
  return (
    <img src={WifiAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WifiAlt;
