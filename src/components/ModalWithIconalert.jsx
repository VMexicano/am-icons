import React from 'react';
import ModalWithIconalert_ from './../Icons/modalWithIconalert.svg';
const ModalWithIconalert = (props) => {
  return (
    <img src={ModalWithIconalert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ModalWithIconalert;
