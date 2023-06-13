import React from 'react';
import NotebookPhone_ from './../Icons/notebookPhone.svg';
const NotebookPhone = (props) => {
  return (
    <img src={NotebookPhone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotebookPhone;
