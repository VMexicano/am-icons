import React from 'react';
import ManAndWoman_ from './../Icons/manAndWoman.svg';
const ManAndWoman = (props) => {
  return (
    <img src={ManAndWoman_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ManAndWoman;
