import React from 'react';
import ChatBubbleSquare_ from './../Icons/chatBubbleSquare.svg';
const ChatBubbleSquare = (props) => {
  return (
    <img src={ChatBubbleSquare_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatBubbleSquare;
