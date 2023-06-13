import React from 'react';
import PriorityStar_ from './../Icons/priorityStar.svg';
const PriorityStar = (props) => {
  return (
    <img src={PriorityStar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PriorityStar;
