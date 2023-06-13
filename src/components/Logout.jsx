import React from 'react';
import Logout_ from './../Icons/logout.svg';
const Logout = (props) => {
  return (
    <img src={Logout_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Logout;
