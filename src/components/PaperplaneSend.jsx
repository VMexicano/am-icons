import React from 'react';
import PaperplaneSend_ from './../Icons/paperplaneSend.svg';
const PaperplaneSend = (props) => {
  return (
    <img src={PaperplaneSend_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaperplaneSend;
