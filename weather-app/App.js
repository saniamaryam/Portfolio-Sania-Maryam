import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Karachi</Text>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png" }}
        style={styles.weatherIcon}
      />
      <Text style={styles.temperature}>28°C</Text>
      <Text style={styles.weatherType}>Sunny</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Humidity: 60%</Text>
        <Text style={styles.details}>Wind: 15 km/h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    padding: 20,
  },
  city: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  weatherIcon: {
    width: 120,
    height: 120,
  },
  temperature: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  weatherType: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
  },
  detailsContainer: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 10,
  },
  details: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

