import React from 'react';
import WebsiteGrid_ from './../Icons/websiteGrid.svg';
const WebsiteGrid = (props) => {
  return (
    <img src={WebsiteGrid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WebsiteGrid;
