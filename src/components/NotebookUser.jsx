import React from 'react';
import NotebookUser_ from './../Icons/notebookUser.svg';
const NotebookUser = (props) => {
  return (
    <img src={NotebookUser_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotebookUser;
