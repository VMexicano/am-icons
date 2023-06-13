import React from 'react';
import WineBottle_ from './../Icons/wineBottle.svg';
const WineBottle = (props) => {
  return (
    <img src={WineBottle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WineBottle;
