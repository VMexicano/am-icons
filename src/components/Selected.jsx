import React from 'react';
import Selected_ from './../Icons/selected.svg';
const Selected = (props) => {
  return (
    <img src={Selected_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Selected;
