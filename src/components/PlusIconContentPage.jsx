import React from 'react';
import PlusIconContentPage_ from './../Icons/plusIconContentPage.svg';
const PlusIconContentPage = (props) => {
  return (
    <img src={PlusIconContentPage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlusIconContentPage;
