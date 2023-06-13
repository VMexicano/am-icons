import React from 'react';
import Wheelchair_ from './../Icons/wheelchair.svg';
const Wheelchair = (props) => {
  return (
    <img src={Wheelchair_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Wheelchair;
