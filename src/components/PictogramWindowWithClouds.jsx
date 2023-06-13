import React from 'react';
import PictogramWindowWithClouds_ from './../Icons/pictogramWindowWithClouds.svg';
const PictogramWindowWithClouds = (props) => {
  return (
    <img src={PictogramWindowWithClouds_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramWindowWithClouds;
