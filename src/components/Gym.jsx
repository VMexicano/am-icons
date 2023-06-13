import React from 'react';
import Gym_ from './../Icons/gym.svg';
const Gym = (props) => {
  return (
    <img src={Gym_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Gym;
