import React from 'react';
import SmartwatchMusic_ from './../Icons/smartwatchMusic.svg';
const SmartwatchMusic = (props) => {
  return (
    <img src={SmartwatchMusic_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartwatchMusic;
