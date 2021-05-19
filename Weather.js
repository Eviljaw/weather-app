import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#e1eec3", "#f05053"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#e1eec3", "#f05053"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}>
      <StatusBar
        barStyle="dafault"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={styles.upContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={99}
          color="white"
        />
        <Text style={styles.text}>{temp} ℃</Text>
      </View>
      <View style={styles.downContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  downContainer: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    color: "white",
  },
});
