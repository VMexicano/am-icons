import React from 'react';
import SaltAndPepper_ from './../Icons/saltAndPepper.svg';
const SaltAndPepper = (props) => {
  return (
    <img src={SaltAndPepper_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SaltAndPepper;
