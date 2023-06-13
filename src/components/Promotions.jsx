import React from 'react';
import Promotions_ from './../Icons/promotions.svg';
const Promotions = (props) => {
  return (
    <img src={Promotions_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Promotions;
