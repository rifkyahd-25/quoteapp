import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

  );
}
