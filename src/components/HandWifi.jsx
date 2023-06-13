import React from 'react';
import HandWifi_ from './../Icons/handWifi.svg';
const HandWifi = (props) => {
  return (
    <img src={HandWifi_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandWifi;
