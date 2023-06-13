import React from 'react';
import BottleOpener_ from './../Icons/bottleOpener.svg';
const BottleOpener = (props) => {
  return (
    <img src={BottleOpener_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BottleOpener;
