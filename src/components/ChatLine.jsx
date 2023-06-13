import React from 'react';
import ChatLine_ from './../Icons/chatLine.svg';
const ChatLine = (props) => {
  return (
    <img src={ChatLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatLine;
