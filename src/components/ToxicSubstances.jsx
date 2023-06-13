import React from 'react';
import ToxicSubstances_ from './../Icons/toxicSubstances.svg';
const ToxicSubstances = (props) => {
  return (
    <img src={ToxicSubstances_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ToxicSubstances;
