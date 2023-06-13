import React from 'react';
import Tower_ from './../Icons/tower.svg';
const Tower = (props) => {
  return (
    <img src={Tower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tower;
