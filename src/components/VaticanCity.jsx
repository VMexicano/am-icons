import React from 'react';
import VaticanCity_ from './../Icons/vaticanCity.svg';
const VaticanCity = (props) => {
  return (
    <img src={VaticanCity_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VaticanCity;
