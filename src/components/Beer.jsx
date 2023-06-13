import React from 'react';
import Beer_ from './../Icons/beer.svg';
const Beer = (props) => {
  return (
    <img src={Beer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Beer;
