import React from 'react';
import PremierBaggage_ from './../Icons/premierBaggage.svg';
const PremierBaggage = (props) => {
  return (
    <img src={PremierBaggage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierBaggage;
