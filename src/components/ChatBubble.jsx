import React from 'react';
import ChatBubble_ from './../Icons/chatBubble.svg';
const ChatBubble = (props) => {
  return (
    <img src={ChatBubble_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatBubble;
