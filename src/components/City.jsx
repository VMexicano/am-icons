import React from 'react';
import City_ from './../Icons/city.svg';
const City = (props) => {
  return (
    <img src={City_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default City;
