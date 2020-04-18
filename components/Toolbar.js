import { StyleSheet, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

export default function GetToolbar() {
  return (
    <View>
      <Appbar.Header style={styles.appBarStyle}>
        <Appbar.Action icon="chevron-left" size={30} color = '#FFF' />
        <Appbar.Content title="Scan attendance" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarStyle: {
    backgroundColor: "#F00",
  },
});
