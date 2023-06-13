import React from 'react';
import Doughnut_ from './../Icons/doughnut.svg';
const Doughnut = (props) => {
  return (
    <img src={Doughnut_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Doughnut;
