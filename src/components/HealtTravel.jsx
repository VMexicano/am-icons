import React from 'react';
import HealtTravel_ from './../Icons/healtTravel.svg';
const HealtTravel = (props) => {
  return (
    <img src={HealtTravel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HealtTravel;
