import React from 'react';
import OfficeAlt_ from './../Icons/officeAlt.svg';
const OfficeAlt = (props) => {
  return (
    <img src={OfficeAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OfficeAlt;
