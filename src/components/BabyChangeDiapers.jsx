import React from 'react';
import BabyChangeDiapers_ from './../Icons/babyChangeDiapers.svg';
const BabyChangeDiapers = (props) => {
  return (
    <img src={BabyChangeDiapers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BabyChangeDiapers;
