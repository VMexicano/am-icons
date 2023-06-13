import React from 'react';
import ArmyKnife_ from './../Icons/armyKnife.svg';
const ArmyKnife = (props) => {
  return (
    <img src={ArmyKnife_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArmyKnife;
