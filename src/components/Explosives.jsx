import React from 'react';
import Explosives_ from './../Icons/explosives.svg';
const Explosives = (props) => {
  return (
    <img src={Explosives_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Explosives;
