import React from 'react';
import ChatYesNo_ from './../Icons/chatYesNo.svg';
const ChatYesNo = (props) => {
  return (
    <img src={ChatYesNo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatYesNo;
