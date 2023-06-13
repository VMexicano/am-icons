import React from 'react';
import ChatText_ from './../Icons/chatText.svg';
const ChatText = (props) => {
  return (
    <img src={ChatText_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatText;
