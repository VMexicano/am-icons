import React from 'react';
import WebsiteHeader_ from './../Icons/websiteHeader.svg';
const WebsiteHeader = (props) => {
  return (
    <img src={WebsiteHeader_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WebsiteHeader;
