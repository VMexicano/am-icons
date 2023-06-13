import React from 'react';
import HablaConNosotros_ from './../Icons/hablaConNosotros.svg';
const HablaConNosotros = (props) => {
  return (
    <img src={HablaConNosotros_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HablaConNosotros;
