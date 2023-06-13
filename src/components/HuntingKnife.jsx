import React from 'react';
import HuntingKnife_ from './../Icons/huntingKnife.svg';
const HuntingKnife = (props) => {
  return (
    <img src={HuntingKnife_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HuntingKnife;
