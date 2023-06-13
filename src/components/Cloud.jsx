import React from 'react';
import Cloud_ from './../Icons/cloud.svg';
const Cloud = (props) => {
  return (
    <img src={Cloud_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cloud;
