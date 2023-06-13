import React from 'react';
import BulbEcologyAlt_ from './../Icons/bulbEcologyAlt.svg';
const BulbEcologyAlt = (props) => {
  return (
    <img src={BulbEcologyAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BulbEcologyAlt;
