import React from 'react';
import FileFaq_ from './../Icons/fileFaq.svg';
const FileFaq = (props) => {
  return (
    <img src={FileFaq_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FileFaq;
