import React from 'react';
import House_ from './../Icons/house.svg';
const House = (props) => {
  return (
    <img src={House_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default House;
