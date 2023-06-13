import React from 'react';
import Crusteaceans_ from './../Icons/crusteaceans.svg';
const Crusteaceans = (props) => {
  return (
    <img src={Crusteaceans_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Crusteaceans;
