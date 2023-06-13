import React from 'react';
import BluetoothAudio_ from './../Icons/bluetoothAudio.svg';
const BluetoothAudio = (props) => {
  return (
    <img src={BluetoothAudio_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BluetoothAudio;
