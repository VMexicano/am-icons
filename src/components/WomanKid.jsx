import React from 'react';
import WomanKid_ from './../Icons/womanKid.svg';
const WomanKid = (props) => {
  return (
    <img src={WomanKid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WomanKid;
