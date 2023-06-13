import React from 'react';
import SmileyFaceSad_ from './../Icons/smileyFaceSad.svg';
const SmileyFaceSad = (props) => {
  return (
    <img src={SmileyFaceSad_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmileyFaceSad;
