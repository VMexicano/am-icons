import React from 'react';
import PlusAdd_ from './../Icons/plusAdd.svg';
const PlusAdd = (props) => {
  return (
    <img src={PlusAdd_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlusAdd;
