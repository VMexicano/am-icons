import React from 'react';
import WineAndFork_ from './../Icons/wineAndFork.svg';
const WineAndFork = (props) => {
  return (
    <img src={WineAndFork_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WineAndFork;
