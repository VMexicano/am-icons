import React from 'react';
import Doors_ from './../Icons/doors.svg';
const Doors = (props) => {
  return (
    <img src={Doors_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Doors;
