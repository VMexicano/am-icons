import React from 'react';
import WomanMan_ from './../Icons/womanMan.svg';
const WomanMan = (props) => {
  return (
    <img src={WomanMan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WomanMan;
