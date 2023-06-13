import React from 'react';
import ChatTweet_ from './../Icons/chatTweet.svg';
const ChatTweet = (props) => {
  return (
    <img src={ChatTweet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatTweet;
