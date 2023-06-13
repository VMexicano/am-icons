import React from 'react';
import EiffelTower_ from './../Icons/eiffelTower.svg';
const EiffelTower = (props) => {
  return (
    <img src={EiffelTower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EiffelTower;
