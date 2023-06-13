import React from 'react';
import Martinique_ from './../Icons/martinique.svg';
const Martinique = (props) => {
  return (
    <img src={Martinique_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Martinique;
