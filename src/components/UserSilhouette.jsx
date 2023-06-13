import React from 'react';
import UserSilhouette_ from './../Icons/userSilhouette.svg';
const UserSilhouette = (props) => {
  return (
    <img src={UserSilhouette_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserSilhouette;
