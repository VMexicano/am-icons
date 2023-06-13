import React from 'react';
import MaskAlt_ from './../Icons/maskAlt.svg';
const MaskAlt = (props) => {
  return (
    <img src={MaskAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MaskAlt;
