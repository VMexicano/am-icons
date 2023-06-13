import React from 'react';
import MypaxNew_ from './../Icons/mypaxNew.svg';
const MypaxNew = (props) => {
  return (
    <img src={MypaxNew_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MypaxNew;
