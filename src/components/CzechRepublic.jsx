import React from 'react';
import CzechRepublic_ from './../Icons/czechRepublic.svg';
const CzechRepublic = (props) => {
  return (
    <img src={CzechRepublic_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CzechRepublic;
