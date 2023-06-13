import React from 'react';
import PictogramUpgrade_ from './../Icons/pictogramUpgrade.svg';
const PictogramUpgrade = (props) => {
  return (
    <img src={PictogramUpgrade_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramUpgrade;
