import React from 'react';
import WifiThin_ from './../Icons/wifiThin.svg';
const WifiThin = (props) => {
  return (
    <img src={WifiThin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WifiThin;
