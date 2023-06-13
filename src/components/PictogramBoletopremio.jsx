import React from 'react';
import PictogramBoletopremio_ from './../Icons/pictogramBoletopremio.svg';
const PictogramBoletopremio = (props) => {
  return (
    <img src={PictogramBoletopremio_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramBoletopremio;
