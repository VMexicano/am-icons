import React from 'react';
import HandWorld_ from './../Icons/handWorld.svg';
const HandWorld = (props) => {
  return (
    <img src={HandWorld_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandWorld;
