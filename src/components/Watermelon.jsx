import React from 'react';
import Watermelon_ from './../Icons/watermelon.svg';
const Watermelon = (props) => {
  return (
    <img src={Watermelon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Watermelon;
