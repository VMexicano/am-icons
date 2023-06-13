import React from 'react';
import PortfolioKey_ from './../Icons/portfolioKey.svg';
const PortfolioKey = (props) => {
  return (
    <img src={PortfolioKey_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PortfolioKey;
