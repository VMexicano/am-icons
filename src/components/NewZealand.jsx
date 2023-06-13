import React from 'react';
import NewZealand_ from './../Icons/newZealand.svg';
const NewZealand = (props) => {
  return (
    <img src={NewZealand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NewZealand;
