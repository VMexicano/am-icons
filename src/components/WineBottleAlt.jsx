import React from 'react';
import WineBottleAlt_ from './../Icons/wineBottleAlt.svg';
const WineBottleAlt = (props) => {
  return (
    <img src={WineBottleAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WineBottleAlt;
