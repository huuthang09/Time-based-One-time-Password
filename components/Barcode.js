import React from "react";
import Barcode from "react-native-barcode-builder";

export default function GetBarcode(props){
    return(
        <Barcode value= {props.txtBarcode}
         format="CODE128" />
    );
}