import React from 'react';
import ChatAdd_ from './../Icons/chatAdd.svg';
const ChatAdd = (props) => {
  return (
    <img src={ChatAdd_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatAdd;
