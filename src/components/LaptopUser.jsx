import React from 'react';
import LaptopUser_ from './../Icons/laptopUser.svg';
const LaptopUser = (props) => {
  return (
    <img src={LaptopUser_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LaptopUser;
