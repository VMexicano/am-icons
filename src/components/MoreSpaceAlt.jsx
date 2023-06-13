import React from 'react';
import MoreSpaceAlt_ from './../Icons/moreSpaceAlt.svg';
const MoreSpaceAlt = (props) => {
  return (
    <img src={MoreSpaceAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MoreSpaceAlt;
