import React from 'react';
import ExitSolid_ from './../Icons/exitSolid.svg';
const ExitSolid = (props) => {
  return (
    <img src={ExitSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ExitSolid;
