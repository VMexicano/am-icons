import React from 'react';
import PassportHand_ from './../Icons/passportHand.svg';
const PassportHand = (props) => {
  return (
    <img src={PassportHand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PassportHand;
