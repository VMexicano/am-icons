import React from 'react';
import AmenityStar_ from './../Icons/amenityStar.svg';
const AmenityStar = (props) => {
  return (
    <img src={AmenityStar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityStar;
