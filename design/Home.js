import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";
import OTP from "otp-client";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GetQR from "../components/QRCode";
import GetBarcode from "../components/Barcode";
import Input from "../components/Input";
import GetToolbar from "../components/Toolbar";
import UserCard from "../components/UserCard";

export default function Home() {
  const [code, setCode] = useState({
    otp: "",
    second: "",
    secretKey: "UserIdAndTime",
  });

  //Chạy tự động khi khởi tạo
  useEffect(() => {
    toggleSecond();
  }, []);

  //Chức năng Update thời gian tồn tại của OTP lên UI
  const toggleSecond = () => {
    const interval = setInterval(toggleOTP, 1000);
    Keyboard.dismiss();
    console.disableYellowBox = true;
    return () => clearInterval(interval);
  };

  //Tạo OTP
  const toggleOTP = () => {
    try {
      const secret = code.secretKey;
      const options = {
        algorithm: "sha256",
        digits: 6,
        period: 30,
      };
      const otp = new OTP(secret, options);
      const token = otp.getToken();
      const tick = otp.getTimeUntilNextTick();
      setCode({
        otp: token,
        second: tick,
      });
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <GetToolbar />
      <UserCard />
      <View style={styles.contentContainer}>
        <Text style={styles.txtQRtitle}>
          Show the code in front scanner's camera
        </Text>
        <GetQR
          linkQR={
            "otpauth://totp/:?secret=" +
            code.secretKey +
            code.otp +
            "&issuer=&digits=6&period=30"
          }
        />

        <Input txtOTP={code.otp} />
        <GetBarcode
          txtBarcode={
            "otpauth://totp/:?secret=" +
            code.secretKey +
            code.otp +
            "&issuer=&digits=6&period=30"
          }
        />
        <Text style={styles.txtSecond}>Time remaining: {code.second}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  txtQRtitle: {
    color: "#938b8b",
    fontSize: 15,
    marginVertical: hp("3%"),
  },

  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  txtSecond: {
    marginTop: hp("5%"),
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});
