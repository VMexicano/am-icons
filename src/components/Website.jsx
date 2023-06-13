import React from 'react';
import Website_ from './../Icons/website.svg';
const Website = (props) => {
  return (
    <img src={Website_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Website;
