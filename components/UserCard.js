import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Card, CardItem, Thumbnail } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export function UserCard() {
  return (
    <View>
      <Card>
          <CardItem header>
          <Thumbnail large source={require("../assets/avatar.jpg")} />
            <View style={styles.txtContainer}>
            <Text style={styles.txtUser}>Huy Dam</Text>
            <Text style={styles.txtJob}>System Admin</Text>
            <Text style={styles.txtCode}>AGN001</Text>
            </View>
          </CardItem>   
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  txtContainer: {
    marginLeft: wp("3%")
  },

  txtUser:{
    color:'#a31616',
    fontWeight:'bold',
    fontSize: 15
  },

  txtJob:{
    color:'#7c7b7b',
    fontSize: 13
  },

  txtCode:{
    color:'#777575',
    fontWeight:'bold',
    fontSize: 14,
    marginTop: hp("3%")
  },
});

export default UserCard;
