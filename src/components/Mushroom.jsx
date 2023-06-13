import React from 'react';
import Mushroom_ from './../Icons/mushroom.svg';
const Mushroom = (props) => {
  return (
    <img src={Mushroom_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mushroom;
