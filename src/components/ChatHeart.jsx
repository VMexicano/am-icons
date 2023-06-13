import React from 'react';
import ChatHeart_ from './../Icons/chatHeart.svg';
const ChatHeart = (props) => {
  return (
    <img src={ChatHeart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatHeart;
