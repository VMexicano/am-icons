import React from 'react';
import Bikini_ from './../Icons/bikini.svg';
const Bikini = (props) => {
  return (
    <img src={Bikini_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bikini;
