import React from 'react';
import ChatSolid_ from './../Icons/chatSolid.svg';
const ChatSolid = (props) => {
  return (
    <img src={ChatSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatSolid;
