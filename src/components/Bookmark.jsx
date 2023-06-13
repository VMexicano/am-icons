import React from 'react';
import Bookmark_ from './../Icons/bookmark.svg';
const Bookmark = (props) => {
  return (
    <img src={Bookmark_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bookmark;
