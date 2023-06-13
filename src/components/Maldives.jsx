import React from 'react';
import Maldives_ from './../Icons/maldives.svg';
const Maldives = (props) => {
  return (
    <img src={Maldives_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Maldives;
