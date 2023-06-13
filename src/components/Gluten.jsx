import React from 'react';
import Gluten_ from './../Icons/gluten.svg';
const Gluten = (props) => {
  return (
    <img src={Gluten_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Gluten;
