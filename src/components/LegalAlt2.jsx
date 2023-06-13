import React from 'react';
import LegalAlt2_ from './../Icons/legalAlt2.svg';
const LegalAlt2 = (props) => {
  return (
    <img src={LegalAlt2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LegalAlt2;
