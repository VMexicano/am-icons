import React from 'react';
import HotAirBalloon_ from './../Icons/hotAirBalloon.svg';
const HotAirBalloon = (props) => {
  return (
    <img src={HotAirBalloon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HotAirBalloon;
