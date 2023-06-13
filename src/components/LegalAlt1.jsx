import React from 'react';
import LegalAlt1_ from './../Icons/legalAlt1.svg';
const LegalAlt1 = (props) => {
  return (
    <img src={LegalAlt1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LegalAlt1;
