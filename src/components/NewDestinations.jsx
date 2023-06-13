import React from 'react';
import NewDestinations_ from './../Icons/newDestinations.svg';
const NewDestinations = (props) => {
  return (
    <img src={NewDestinations_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NewDestinations;
