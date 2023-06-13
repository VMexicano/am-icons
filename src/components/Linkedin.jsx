import React from 'react';
import Linkedin_ from './../Icons/linkedin.svg';
const Linkedin = (props) => {
  return (
    <img src={Linkedin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Linkedin;
