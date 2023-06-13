import React from 'react';
import Jam_ from './../Icons/jam.svg';
const Jam = (props) => {
  return (
    <img src={Jam_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Jam;
