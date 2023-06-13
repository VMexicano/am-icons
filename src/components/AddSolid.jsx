import React from 'react';
import AddSolid_ from './../Icons/addSolid.svg';
const AddSolid = (props) => {
  return (
    <img src={AddSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AddSolid;
