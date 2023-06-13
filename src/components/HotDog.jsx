import React from 'react';
import HotDog_ from './../Icons/hotDog.svg';
const HotDog = (props) => {
  return (
    <img src={HotDog_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HotDog;
