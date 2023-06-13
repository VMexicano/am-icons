import React from 'react';
import ReglasEquipaje_ from './../Icons/reglasEquipaje.svg';
const ReglasEquipaje = (props) => {
  return (
    <img src={ReglasEquipaje_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ReglasEquipaje;
