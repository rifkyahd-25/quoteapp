import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    // Simulate loading tasks (like fetching data or initializing theme)
    const timer = setTimeout(() => {
      onFinish(); // Notify that loading is done
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff3366" />
      <Text style={styles.text}>Loading Quotes App...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
});
