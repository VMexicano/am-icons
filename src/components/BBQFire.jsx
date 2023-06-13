import React from 'react';
import BBQFire_ from './../Icons/bBQFire.svg';
const BBQFire = (props) => {
  return (
    <img src={BBQFire_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BBQFire;
