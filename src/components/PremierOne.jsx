import React from 'react';
import PremierOne_ from './../Icons/premierOne.svg';
const PremierOne = (props) => {
  return (
    <img src={PremierOne_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierOne;
