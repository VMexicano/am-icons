import React from 'react';
import Recipt_ from './../Icons/recipt.svg';
const Recipt = (props) => {
  return (
    <img src={Recipt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Recipt;
