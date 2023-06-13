import React from 'react';
import KiteSea_ from './../Icons/kiteSea.svg';
const KiteSea = (props) => {
  return (
    <img src={KiteSea_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default KiteSea;
