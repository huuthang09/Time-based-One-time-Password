import React from "react";
import OTPInput from "react-native-otp";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Input(props){
    return(
        <OTPInput
        containerStyle={{ marginTop: hp("5%") }}
        value={props.txtOTP}
        offTintColor="#F00"
        otpLength={6}
      />
    );
}