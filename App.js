// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import AppNavigator from "./navigation/AppNavigator";
// import { ThemeProvider } from "./context/ThemeContext";


// export default function App() {
//   return (
//     <ThemeProvider>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//       </ThemeProvider>
//   );
// }
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { ThemeProvider } from "./context/ThemeContext";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lora: require("./assets/fonts/Lora-VariableFont_wght.ttf"),
  });

  const [appReady, setAppReady] = useState(false);

  // Wait until fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      setAppReady(true);
    }
  }, [fontsLoaded]);

  if (!appReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
