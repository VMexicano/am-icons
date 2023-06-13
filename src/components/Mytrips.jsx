import React from 'react';
import Mytrips_ from './../Icons/mytrips.svg';
const Mytrips = (props) => {
  return (
    <img src={Mytrips_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mytrips;
