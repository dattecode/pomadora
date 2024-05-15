import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = ({ time }) => {
  const formatteTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${
      (time % 60)
      .toString()
      .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatteTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
    flex: 0.25,
    justifyContent: "center",
  },
  time: {
    fontWeight: "bold",
    fontSize: 80,
    textAlign: "center",
    color: "#4b4848",
  },
});

export default Timer;
