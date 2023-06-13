import React from 'react';
import CBXPerson_ from './../Icons/cBXPerson.svg';
const CBXPerson = (props) => {
  return (
    <img src={CBXPerson_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CBXPerson;
