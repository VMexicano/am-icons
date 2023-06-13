import React from 'react';
import Sardinia_ from './../Icons/sardinia.svg';
const Sardinia = (props) => {
  return (
    <img src={Sardinia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sardinia;
