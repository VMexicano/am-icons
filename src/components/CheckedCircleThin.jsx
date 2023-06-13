import React from 'react';
import CheckedCircleThin_ from './../Icons/checkedCircleThin.svg';
const CheckedCircleThin = (props) => {
  return (
    <img src={CheckedCircleThin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckedCircleThin;
