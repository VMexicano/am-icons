import React from 'react';
import WithHat_ from './../Icons/withHat.svg';
const WithHat = (props) => {
  return (
    <img src={WithHat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WithHat;
