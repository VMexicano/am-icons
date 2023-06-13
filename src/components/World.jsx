import React from 'react';
import World_ from './../Icons/world.svg';
const World = (props) => {
  return (
    <img src={World_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default World;
