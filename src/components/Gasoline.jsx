import React from 'react';
import Gasoline_ from './../Icons/gasoline.svg';
const Gasoline = (props) => {
  return (
    <img src={Gasoline_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Gasoline;
