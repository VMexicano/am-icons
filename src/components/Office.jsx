import React from 'react';
import Office_ from './../Icons/office.svg';
const Office = (props) => {
  return (
    <img src={Office_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Office;
