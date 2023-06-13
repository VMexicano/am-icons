import React from 'react';
import Information_ from './../Icons/information.svg';
const Information = (props) => {
  return (
    <img src={Information_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Information;
