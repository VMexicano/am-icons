import React from 'react';
import Passport_ from './../Icons/passport.svg';
const Passport = (props) => {
  return (
    <img src={Passport_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Passport;
