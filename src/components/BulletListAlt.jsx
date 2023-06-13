import React from 'react';
import BulletListAlt_ from './../Icons/bulletListAlt.svg';
const BulletListAlt = (props) => {
  return (
    <img src={BulletListAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BulletListAlt;
