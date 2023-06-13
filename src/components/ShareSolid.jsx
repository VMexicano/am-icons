import React from 'react';
import ShareSolid_ from './../Icons/shareSolid.svg';
const ShareSolid = (props) => {
  return (
    <img src={ShareSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShareSolid;
