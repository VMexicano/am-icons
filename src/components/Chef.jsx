import React from 'react';
import Chef_ from './../Icons/chef.svg';
const Chef = (props) => {
  return (
    <img src={Chef_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chef;
