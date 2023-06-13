import React from 'react';
import Investor_ from './../Icons/investor.svg';
const Investor = (props) => {
  return (
    <img src={Investor_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Investor;
