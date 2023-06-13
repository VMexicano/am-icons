import React from 'react';
import SmartPhoneChat_ from './../Icons/smartPhoneChat.svg';
const SmartPhoneChat = (props) => {
  return (
    <img src={SmartPhoneChat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartPhoneChat;
