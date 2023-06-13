import React from 'react';
import Greenland_ from './../Icons/greenland.svg';
const Greenland = (props) => {
  return (
    <img src={Greenland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Greenland;
