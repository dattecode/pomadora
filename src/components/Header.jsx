import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../utils/theme";

const Header = ({ setTime, currentTime, setCurrentTime }) => {
  const option = ["Pomodoro", "Short Break", "Long Break"];

  const handlePress = (index) => {
    const newTime = index === 0 ? 25 * 60 : index === 1 ? 5 * 60 : 15 * 60;
    setCurrentTime(index);
    setTime(newTime);
  };

  return (
    <View style={styles.containerHeader}>
      {option.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.textCH, currentTime !== index && { borderColor: "transparent" }]}
          onPress={() => handlePress(index)}
        >
          <Text style={[styles.textH, currentTime === index && { color: "gold" }]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textCH: {
    width: "33%",
    padding: 10,
    borderWidth: 3,
    borderRadius: 15,
    alignItems: "center",
  },
  textH:{
    fontWeight: "bold",
  }

});

export default Header;
