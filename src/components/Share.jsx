import React from 'react';
import Share_ from './../Icons/share.svg';
const Share = (props) => {
  return (
    <img src={Share_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Share;
