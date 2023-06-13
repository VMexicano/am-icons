import React from 'react';
import LoginBadge_ from './../Icons/loginBadge.svg';
const LoginBadge = (props) => {
  return (
    <img src={LoginBadge_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LoginBadge;
