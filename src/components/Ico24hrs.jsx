import React from 'react';
import Ico24hrs_ from './../Icons/ico24hrs.svg';
const Ico24hrs = (props) => {
  return (
    <img src={Ico24hrs_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ico24hrs;
