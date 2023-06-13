import React from 'react';
import RamenSoup_ from './../Icons/ramenSoup.svg';
const RamenSoup = (props) => {
  return (
    <img src={RamenSoup_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RamenSoup;
