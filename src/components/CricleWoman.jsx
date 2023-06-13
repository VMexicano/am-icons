import React from 'react';
import CricleWoman_ from './../Icons/cricleWoman.svg';
const CricleWoman = (props) => {
  return (
    <img src={CricleWoman_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CricleWoman;
