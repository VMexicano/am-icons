import React from 'react';
import MoreInfo_ from './../Icons/moreInfo.svg';
const MoreInfo = (props) => {
  return (
    <img src={MoreInfo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MoreInfo;
