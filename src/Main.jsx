import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "./utils/theme";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { Audio } from "expo-av";

const Main = () => {
  //state
  const [isWorking, setIsWorking] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [time, setTime] = React.useState(25 * 60);
  const [currentTime, setCurrentTime] = React.useState(
    "POMO" | "SHORT" | "BREAK"
  );

  //logic

  const colors = ["#f35d74", "#69b4ff", "#a64aff"];

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/click1.mp3")
    );
    await sound.playAsync();
  };

  //effects

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if(time === 0){
      setIsActive(false);
      
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Text style={styles.title}>POMODORO</Text>
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Timer time={time} />
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={styles.text}>{isActive ? "PAUSE" : "START"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 10,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Main;
