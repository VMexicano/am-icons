import React from 'react';
import BagPersonalItem_ from './../Icons/bagPersonalItem.svg';
const BagPersonalItem = (props) => {
  return (
    <img src={BagPersonalItem_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BagPersonalItem;
