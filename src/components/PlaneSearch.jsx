import React from 'react';
import PlaneSearch_ from './../Icons/planeSearch.svg';
const PlaneSearch = (props) => {
  return (
    <img src={PlaneSearch_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneSearch;
