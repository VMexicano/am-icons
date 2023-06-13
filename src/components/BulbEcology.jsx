import React from 'react';
import BulbEcology_ from './../Icons/bulbEcology.svg';
const BulbEcology = (props) => {
  return (
    <img src={BulbEcology_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BulbEcology;
