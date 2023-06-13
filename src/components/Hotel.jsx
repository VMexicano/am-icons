import React from 'react';
import Hotel_ from './../Icons/hotel.svg';
const Hotel = (props) => {
  return (
    <img src={Hotel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hotel;
