import React from 'react';
import PremierSnacks_ from './../Icons/premierSnacks.svg';
const PremierSnacks = (props) => {
  return (
    <img src={PremierSnacks_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierSnacks;
