import React from 'react';
import Userlogin_ from './../Icons/userlogin.svg';
const Userlogin = (props) => {
  return (
    <img src={Userlogin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Userlogin;
