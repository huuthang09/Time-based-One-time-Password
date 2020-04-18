import React from "react";
import QRCode from "react-native-qrcode-svg";

export default function GetQR(props){
    return(
        <QRCode
        value={props.linkQR}
        size={100}
      />
    );
}