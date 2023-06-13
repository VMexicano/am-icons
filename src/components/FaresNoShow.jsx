import React from 'react';
import FaresNoShow_ from './../Icons/faresNoShow.svg';
const FaresNoShow = (props) => {
  return (
    <img src={FaresNoShow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresNoShow;
