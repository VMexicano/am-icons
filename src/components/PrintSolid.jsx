import React from 'react';
import PrintSolid_ from './../Icons/printSolid.svg';
const PrintSolid = (props) => {
  return (
    <img src={PrintSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PrintSolid;
