import React from 'react';
import BosniaAndHerzegovina_ from './../Icons/bosniaAndHerzegovina.svg';
const BosniaAndHerzegovina = (props) => {
  return (
    <img src={BosniaAndHerzegovina_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BosniaAndHerzegovina;
