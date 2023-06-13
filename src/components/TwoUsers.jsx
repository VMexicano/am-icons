import React from 'react';
import TwoUsers_ from './../Icons/twoUsers.svg';
const TwoUsers = (props) => {
  return (
    <img src={TwoUsers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TwoUsers;
