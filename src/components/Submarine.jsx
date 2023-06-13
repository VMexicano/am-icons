import React from 'react';
import Submarine_ from './../Icons/submarine.svg';
const Submarine = (props) => {
  return (
    <img src={Submarine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Submarine;
