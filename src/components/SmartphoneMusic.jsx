import React from 'react';
import SmartphoneMusic_ from './../Icons/smartphoneMusic.svg';
const SmartphoneMusic = (props) => {
  return (
    <img src={SmartphoneMusic_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartphoneMusic;
