import React from 'react';
import BasqueCountry_ from './../Icons/basqueCountry.svg';
const BasqueCountry = (props) => {
  return (
    <img src={BasqueCountry_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BasqueCountry;
