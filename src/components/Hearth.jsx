import React from 'react';
import Hearth_ from './../Icons/hearth.svg';
const Hearth = (props) => {
  return (
    <img src={Hearth_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hearth;
