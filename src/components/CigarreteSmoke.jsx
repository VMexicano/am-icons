import React from 'react';
import CigarreteSmoke_ from './../Icons/cigarreteSmoke.svg';
const CigarreteSmoke = (props) => {
  return (
    <img src={CigarreteSmoke_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CigarreteSmoke;
