import React from 'react';
import Montserrat_ from './../Icons/montserrat.svg';
const Montserrat = (props) => {
  return (
    <img src={Montserrat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Montserrat;
