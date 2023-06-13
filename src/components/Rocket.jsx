import React from 'react';
import Rocket_ from './../Icons/rocket.svg';
const Rocket = (props) => {
  return (
    <img src={Rocket_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Rocket;
