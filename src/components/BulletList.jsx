import React from 'react';
import BulletList_ from './../Icons/bulletList.svg';
const BulletList = (props) => {
  return (
    <img src={BulletList_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BulletList;
