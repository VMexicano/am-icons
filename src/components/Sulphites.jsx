import React from 'react';
import Sulphites_ from './../Icons/sulphites.svg';
const Sulphites = (props) => {
  return (
    <img src={Sulphites_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sulphites;
