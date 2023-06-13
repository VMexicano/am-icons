import React from 'react';
import Soup_ from './../Icons/soup.svg';
const Soup = (props) => {
  return (
    <img src={Soup_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Soup;
