import React from 'react';
import ParragraphWithIamge_ from './../Icons/parragraphWithIamge.svg';
const ParragraphWithIamge = (props) => {
  return (
    <img src={ParragraphWithIamge_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ParragraphWithIamge;
