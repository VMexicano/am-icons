import React from 'react';
import CheckList_ from './../Icons/checkList.svg';
const CheckList = (props) => {
  return (
    <img src={CheckList_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckList;
