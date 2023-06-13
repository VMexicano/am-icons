import React from 'react';
import SearchUser_ from './../Icons/searchUser.svg';
const SearchUser = (props) => {
  return (
    <img src={SearchUser_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SearchUser;
