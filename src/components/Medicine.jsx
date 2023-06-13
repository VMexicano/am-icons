import React from 'react';
import Medicine_ from './../Icons/medicine.svg';
const Medicine = (props) => {
  return (
    <img src={Medicine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Medicine;
