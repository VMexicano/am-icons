import React from 'react';
import KetchupCatsup_ from './../Icons/ketchupCatsup.svg';
const KetchupCatsup = (props) => {
  return (
    <img src={KetchupCatsup_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default KetchupCatsup;
