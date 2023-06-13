import React from 'react';
import SmileyFaceNeutral_ from './../Icons/smileyFaceNeutral.svg';
const SmileyFaceNeutral = (props) => {
  return (
    <img src={SmileyFaceNeutral_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmileyFaceNeutral;
