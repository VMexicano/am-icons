import React from 'react';
import PremierDessert_ from './../Icons/premierDessert.svg';
const PremierDessert = (props) => {
  return (
    <img src={PremierDessert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierDessert;
