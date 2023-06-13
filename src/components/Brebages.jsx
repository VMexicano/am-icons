import React from 'react';
import Brebages_ from './../Icons/brebages.svg';
const Brebages = (props) => {
  return (
    <img src={Brebages_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Brebages;
