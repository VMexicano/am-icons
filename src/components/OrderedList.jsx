import React from 'react';
import OrderedList_ from './../Icons/orderedList.svg';
const OrderedList = (props) => {
  return (
    <img src={OrderedList_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OrderedList;
