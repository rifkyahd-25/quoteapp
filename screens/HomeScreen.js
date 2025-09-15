// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import quotesData from "../assets/quotes.json";
// import { Ionicons } from "@expo/vector-icons";
// import ViewShot from "react-native-view-shot";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system/legacy";

// const { width } = Dimensions.get("window");

// export default function HomeScreen() {
//   const [quote, setQuote] = useState(null);
//   const viewShotRef = React.useRef();

//   useEffect(() => {
//     getQuoteOfTheDay();
//   }, []);

//   const getQuoteOfTheDay = async () => {
//     try {
//       const shownQuotes = JSON.parse(await AsyncStorage.getItem("shownQuotes")) || [];
//       const remainingQuotes = quotesData.filter(q => !shownQuotes.includes(q.quote));

//       let todayQuote;
//       if (remainingQuotes.length === 0) {
//         await AsyncStorage.removeItem("shownQuotes");
//         todayQuote = quotesData[0];
//         await AsyncStorage.setItem("shownQuotes", JSON.stringify([todayQuote.quote]));
//       } else {
//         todayQuote = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
//         await AsyncStorage.setItem(
//           "shownQuotes",
//           JSON.stringify([...shownQuotes, todayQuote.quote])
//         );
//       }
//       setQuote(todayQuote);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const nextQuote = () => {
//     getQuoteOfTheDay();
//   };

//   const shareQuote = async () => {
//     try {
//       if (!quote) return;
//       const uri = await viewShotRef.current.capture();
//       const fileUri = FileSystem.cacheDirectory + "quote.png";
//       await FileSystem.copyAsync({ from: uri, to: fileUri });
//       await Sharing.shareAsync(fileUri);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const truncateAuthor = (author) => {
//     if (!author) return "";
//     return author.length > 30 ? author.substring(0, 27) + "..." : author;
//   };

//   if (!quote) return <Text style={{ textAlign: "center", marginTop: 20 }}>Loading...</Text>;

//   return (
//     <View style={styles.container}>
//       <ViewShot ref={viewShotRef} options={{ format: "png", quality: 0.9 }}>
//         <View style={styles.card}>
//           <Text style={styles.quote}>"{quote.quote}"</Text>
//           <Text style={styles.author}>- {truncateAuthor(quote.author)}</Text>
//         </View>
//       </ViewShot>

//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={styles.nextBtn} onPress={nextQuote}>
//           <Text style={styles.nextText}>Next Quote</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.shareBtn} onPress={shareQuote}>
//           <Ionicons name="share-social-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f3f4f6" },
//   card: {
//     width: width * 0.9,
//     padding: 25,
//     borderRadius: 20,
//     backgroundColor: "#a0c4ff",
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 6,
//   },
//   quote: { fontSize: 20, textAlign: "left", marginBottom: 15, color: "#111", fontWeight: "500" },
//   author: { fontSize: 16, textAlign: "right", fontStyle: "italic", color: "#333" },
//   buttonsContainer: {
//     flexDirection: "row",
//     marginTop: 30,
//     justifyContent: "space-between",
//     width: width * 0.9,
//   },
//   nextBtn: {
//     flex: 1,
//     backgroundColor: "#4cc9f0",
//     paddingVertical: 12,
//     borderRadius: 25,
//     alignItems: "center",
//     marginRight: 10,
//   },
//   nextText: { color: "#fff", fontWeight: "600", fontSize: 16 },
//   shareBtn: {
//     width: 60,
//     backgroundColor: "#ff3366",
//     paddingVertical: 12,
//     borderRadius: 25,
//     alignItems: "center",
//   },
// });

//correct code
// import React, { useEffect, useState, useRef } from "react";
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import quotesData from "../assets/quotes.json";
// import { Ionicons } from "@expo/vector-icons";
// import ViewShot from "react-native-view-shot";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system/legacy";

// const { width } = Dimensions.get("window");

// export default function HomeScreen() {
//   const [quote, setQuote] = useState(null);
//   const viewShotRef = useRef();

//   useEffect(() => {
//     getQuoteOfTheDay();
//   }, []);

//   const getQuoteOfTheDay = async () => {
//     try {
//       const shownQuotes = JSON.parse(await AsyncStorage.getItem("shownQuotes")) || [];
//       const remainingQuotes = quotesData.filter(q => !shownQuotes.includes(q.quote));

//       let todayQuote;
//       if (remainingQuotes.length === 0) {
//         await AsyncStorage.removeItem("shownQuotes");
//         todayQuote = quotesData[0];
//         await AsyncStorage.setItem("shownQuotes", JSON.stringify([todayQuote.quote]));
//       } else {
//         todayQuote = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
//         await AsyncStorage.setItem(
//           "shownQuotes",
//           JSON.stringify([...shownQuotes, todayQuote.quote])
//         );
//       }
//       setQuote(todayQuote);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const nextQuote = () => {
//     getQuoteOfTheDay();
//   };

//   const shareQuote = async () => {
//     try {
//       if (!quote) return;
//       const uri = await viewShotRef.current.capture();
//       const fileUri = FileSystem.cacheDirectory + "quote.png";
//       await FileSystem.copyAsync({ from: uri, to: fileUri });
//       await Sharing.shareAsync(fileUri);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!quote) return <Text style={{ textAlign: "center", marginTop: 20 }}>Loading...</Text>;

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Today's Quote Section */}
//       <View style={styles.todayContainer}>
//         <Text style={styles.todayLabel}>Today's Quote</Text>
//       </View>

//       {/* Quote Card */}
//       <ViewShot ref={viewShotRef} options={{ format: "png", quality: 0.9 }}>
//         <View style={styles.card}>
//           <Text style={styles.quote}>"{quote.quote}"</Text>
//           <Text style={styles.author}>- {quote.author}</Text>
//         </View>
//       </ViewShot>

//       {/* Bottom Buttons */}
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={styles.nextBtn} onPress={nextQuote}>
//           <Text style={styles.nextText}>Tap for More</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.shareBtn} onPress={shareQuote}>
//           <Ionicons name="share-social-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20, justifyContent: "space-between" },
//   todayContainer: { marginTop: 10, marginBottom: 20, alignItems: "center" },
//   todayLabel: { fontSize: 14, color: "#888", fontWeight: "500" },
//   card: {
//     width: width * 0.9,
//     height: width * 0.9,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 5,
//     padding: 30,
//   },
//   quote: { fontSize: 22, textAlign: "center", color: "#111", fontWeight: "500" },
//   author: { fontSize: 16, textAlign: "center", color: "#999", marginTop: 20, fontStyle: "italic" },
//   buttonsContainer: {
//     flexDirection: "row",
//     width: width * 0.9,
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   nextBtn: {
//     flex: 1,
//     backgroundColor: "#4cc9f0",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//     marginRight: 10,
//   },
//   nextText: { color: "#fff", fontWeight: "600", fontSize: 16 },
//   shareBtn: {
//     width: 60,
//     backgroundColor: "#ff3366",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//   },
// });

// import React, { useEffect, useState, useRef } from "react";
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Animated } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import quotesData from "../assets/quotes.json";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";

// const { width } = Dimensions.get("window");

// export default function HomeScreen() {
//   const [quote, setQuote] = useState(null);
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const viewShotRef = useRef();

//   useEffect(() => {
//     getQuoteOfTheDay();
//   }, []);

//   const fadeInQuote = () => {
//     fadeAnim.setValue(0);
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   };

//   const getQuoteOfTheDay = async () => {
//     try {
//       const shownQuotes = JSON.parse(await AsyncStorage.getItem("shownQuotes")) || [];
//       const remainingQuotes = quotesData.filter(q => !shownQuotes.includes(q.quote));

//       let todayQuote;
//       if (remainingQuotes.length === 0) {
//         await AsyncStorage.removeItem("shownQuotes");
//         todayQuote = quotesData[0];
//         await AsyncStorage.setItem("shownQuotes", JSON.stringify([todayQuote.quote]));
//       } else {
//         todayQuote = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
//         await AsyncStorage.setItem(
//           "shownQuotes",
//           JSON.stringify([...shownQuotes, todayQuote.quote])
//         );
//       }
//       setQuote(todayQuote);
//       fadeInQuote();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const nextQuote = () => getQuoteOfTheDay();

//   const shareQuote = async () => {
//     try {
//       if (!quote) return;
//       const uri = await viewShotRef.current.capture();
//       const fileUri = FileSystem.cacheDirectory + "quote.png";
//       await FileSystem.copyAsync({ from: uri, to: fileUri });
//       await Sharing.shareAsync(fileUri);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!quote) return <Text style={styles.loadingText}>Loading...</Text>;

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Today's Quote Label */}
//       <View style={styles.todayContainer}>
//         <Text style={styles.todayLabel}>✨ Today's Quote ✨</Text>
//       </View>

//       {/* Quote Card */}
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <LinearGradient
//           colors={["#ffe0f0", "#fff0e0"]}
//           start={[0, 0]}
//           end={[1, 1]}
//           style={styles.card}
//         >
//           <View ref={viewShotRef} collapsable={false}>
//             <Text style={styles.quoteMark}>“</Text>
//             <Text style={styles.quote}>"{quote.quote}"</Text>
//             <Text style={styles.author}>- {quote.author}</Text>
//           </View>
//         </LinearGradient>
//       </Animated.View>

//       {/* Buttons */}
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={styles.nextBtn} onPress={nextQuote}>
//           <Text style={styles.nextText}>Tap for More</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.shareBtn} onPress={shareQuote}>
//           <Ionicons name="share-social-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fefefe",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 20,
//   },
//   loadingText: {
//     marginTop: 50,
//     fontSize: 18,
//     color: "#aaa",
//     textAlign: "center",
//   },
//   todayContainer: {
//     marginTop: 10,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   todayLabel: {
//     fontSize: 16,
//     color: "#555",
//     fontWeight: "600",
//   },
//   card: {
//     width: width * 0.9,
//     minHeight: width * 0.9,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 30,
//     padding: 30,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 8 },
//     shadowRadius: 15,
//     elevation: 8,
//   },
//   quoteMark: {
//     fontSize: 60,
//     color: "rgba(0,0,0,0.05)",
//     position: "absolute",
//     top: 20,
//     left: 20,
//   },
//   quote: {
//     fontSize: 22,
//     fontWeight: "600",
//     textAlign: "center",
//     color: "#333",
//     lineHeight: 32,
//   },
//   author: {
//     fontSize: 16,
//     fontStyle: "italic",
//     color: "#666",
//     marginTop: 25,
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     width: width * 0.9,
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   nextBtn: {
//     flex: 1,
//     backgroundColor: "#4cc9f0",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//     marginRight: 10,
//   },
//   nextText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   shareBtn: {
//     width: 60,
//     backgroundColor: "#ff3366",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//   },
// });

// import React, { useEffect, useState, useRef } from "react";
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Animated } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import quotesData from "../assets/quotes.json";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import * as Sharing from "expo-sharing";
// import * as FileSystem from "expo-file-system";
// import ViewShot from "react-native-view-shot";
// import * as MediaLibrary from "expo-media-library";

// const { width } = Dimensions.get("window");

// export default function HomeScreen() {
//   const [quote, setQuote] = useState(null);
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const viewShotRef = useRef();

//   useEffect(() => {
//     getQuoteOfTheDay();
//   }, []);

//   const fadeInQuote = () => {
//     fadeAnim.setValue(0);
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   };

//   const getQuoteOfTheDay = async () => {
//     try {
//       const shownQuotes = JSON.parse(await AsyncStorage.getItem("shownQuotes")) || [];
//       const remainingQuotes = quotesData.filter((q) => !shownQuotes.includes(q.quote));

//       let todayQuote;
//       if (remainingQuotes.length === 0) {
//         await AsyncStorage.removeItem("shownQuotes");
//         todayQuote = quotesData[0];
//         await AsyncStorage.setItem("shownQuotes", JSON.stringify([todayQuote.quote]));
//       } else {
//         todayQuote = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
//         await AsyncStorage.setItem("shownQuotes", JSON.stringify([...shownQuotes, todayQuote.quote]));
//       }
//       setQuote(todayQuote);
//       fadeInQuote();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const nextQuote = () => getQuoteOfTheDay();

//   const shareQuote = async () => {
//     try {
//       const uri = await viewShotRef.current.capture();
//       await Sharing.shareAsync(uri);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const downloadAsImage = async () => {
//     try {
//       const uri = await viewShotRef.current.capture({ width: 1080, height: 1080 });
//       const perm = await MediaLibrary.requestPermissionsAsync();
//       if (perm.status === "granted") {
//         await MediaLibrary.saveToLibraryAsync(uri);
//         alert("✅ Quote saved to gallery!");
//       } else {
//         alert("Permission to access gallery denied.");
//       }
//     } catch (error) {
//       console.log("Error capturing quote:", error);
//     }
//   };

//   if (!quote) return <Text style={styles.loadingText}>Loading...</Text>;

//   return (

//     <View style={styles.container}>
//       {/* Today's Quote Label */}
//       <View style={styles.todayContainer}>
//   <LinearGradient
//     colors={["#ff6ec7", "#ff9a44"]}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 0 }}
//     style={styles.todayGradient}
//   >
//     <Text style={styles.todayLabel}>✨ Today&apos;s Quote ✨</Text>
//   </LinearGradient>
// </View>

//       {/* Quote Card (inside ViewShot for sharing + download) */}
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ViewShot ref={viewShotRef} options={{ format: "png", quality: 1 }}>
//           <LinearGradient colors={["#ffe0f0", "#fff0e0"]} start={[0, 0]} end={[1, 1]} style={styles.card}>
//             <Text style={styles.quoteMark}>“</Text>
//             <Text style={styles.quote}>"{quote.quote}"</Text>
//             <Text style={styles.author}>- {quote.author}</Text>
//           </LinearGradient>
//         </ViewShot>
//       </Animated.View>

//       {/* Buttons */}
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={styles.nextBtn} onPress={nextQuote}>
//           <Text style={styles.nextText}>Next</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.shareBtn} onPress={shareQuote}>
//           <Ionicons name="share-social-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.downloadBtn} onPress={downloadAsImage}>
//           <Ionicons name="download-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#FFF8F0", alignItems: "center", padding: 20, justifyContent: "center" },
//   loadingText: { marginTop: 50, fontSize: 18, color: "#aaa", textAlign: "center" },
//   todayContainer: {
//     marginTop: 10,
//     marginBottom: 30,
//     alignItems: "center",
//   },
//   todayGradient: {
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 5,
//   },
//   todayLabel: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#fff",
//     textAlign: "center",
//   },
//   card: {
//     width: width * 0.9,
//     height: width * 0.9, // Square card for Instagram-style export
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 30,
//     padding: 30,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 8 },
//     shadowRadius: 15,
//     elevation: 8,
//     backgroundColor: "#fff",
//   },
//   quoteMark: { fontSize: 60, color: "rgba(0,0,0,0.05)", position: "absolute", top: 20, left: 20 },
//   quote: { fontSize: 22, fontWeight: "600", textAlign: "center", color: "#333", lineHeight: 32 },
//   author: { fontSize: 16, fontStyle: "italic", color: "#666", marginTop: 25 },
//   buttonsContainer: {
//     flexDirection: "row",
//     width: width * 0.9,
//     justifyContent: "space-between",
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   nextBtn: {
//     flex: 1,
//     backgroundColor: "#F8BBD0",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//     marginRight: 10,
//   },
//   nextText: { color: "#333333", fontWeight: "600", fontSize: 16 },
//   shareBtn: {
//     width: 60,
//     backgroundColor: "#ff3366",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//     marginRight: 10,
//   },
//   downloadBtn: {
//     width: 60,
//     backgroundColor: "#22c55e",
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: "center",
//   },
// });

import React, { useEffect, useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import quotesData from "../assets/quotes.json";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { ThemeContext } from "../context/ThemeContext";
const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [quote, setQuote] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const viewShotRef = useRef();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getQuoteOfTheDay();
  }, []);

  const fadeInQuote = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const getQuoteOfTheDay = async () => {
    try {
      const indexStr = await AsyncStorage.getItem("quoteIndex");
      let index = indexStr ? parseInt(indexStr, 10) : 0;

      if (index >= quotesData.length) {
        index = 0; // reset if we've shown all
      }

      const todayQuote = quotesData[index];
      setQuote(todayQuote);
      fadeInQuote();

      await AsyncStorage.setItem("quoteIndex", (index + 1).toString());
    } catch (err) {
      console.log(err);
    }
  };

  const nextQuote = () => getQuoteOfTheDay();

  const shareQuote = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      await Sharing.shareAsync(uri);
    } catch (err) {
      console.log(err);
    }
  };

  const downloadAsImage = async () => {
    try {
      const uri = await viewShotRef.current.capture({
        width: 1080,
        height: 1080,
      });
      const perm = await MediaLibrary.requestPermissionsAsync();
      if (perm.status === "granted") {
        await MediaLibrary.saveToLibraryAsync(uri);
        alert("✅ Quote saved to gallery!");
      } else {
        alert("Permission to access gallery denied.");
      }
    } catch (error) {
      console.log("Error capturing quote:", error);
    }
  };

  if (!quote) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading quote...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Today's Quote Label */}
      {/* <View style={styles.todayContainer}>
  <LinearGradient
    colors={["#ff6ec7", "#ff9a44"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.todayGradient}
  >
    
  </LinearGradient>
</View> */}
      <View style={styles.todayContainer}>
        <Text style={[styles.todayLabel, {fontFamily: "Lora"}]}> Today&apos;s Quote </Text>
      </View>
      {/* Quote Card (inside ViewShot for sharing + download) */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <ViewShot ref={viewShotRef} options={{ format: "png", quality: 1 }}>
          <LinearGradient
            colors={[theme.bigcard, theme.bigcard]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.card}
          >
            <Text style={styles.quoteMark}>“</Text>
            <Text style={[styles.quote, { color: theme.text, fontFamily: "Lora" }]}>
              "{quote.quote}"
            </Text>
            <Text style={styles.author}>- {quote.author}</Text>
          </LinearGradient>
        </ViewShot>
      </Animated.View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.nextBtn, { backgroundColor: theme.smcardtextcolor }]}
          onPress={nextQuote}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.shareBtn, { backgroundColor: theme.smcardtextcolor }]}
          onPress={shareQuote}
        >
          <Ionicons name="share-social-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.downloadBtn, { backgroundColor: theme.active }]}
          onPress={downloadAsImage}
        >
          <Ionicons name="download-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 50,
    fontSize: 18,
    color: "#aaa",
    textAlign: "center",
  },
  todayContainer: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  todayGradient: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F0",
  },
  todayLabel: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
   
  },
  card: {
    width: width * 0.9,
    height: width * 0.9, // Square card for Instagram-style export
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 15,
    elevation: 8,
    backgroundColor: "#fff",
  },
  quoteMark: {
    fontSize: 60,
  fontFamily: "Lora", // replace "tara" with "Lora"
  color: "rgba(0,0,0,0.05)",
  position: "absolute",
  top: 20,
  left: 20,
  },
  quote: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    lineHeight: 32,
  },
  author: { fontSize: 16, fontStyle: "italic",fontFamily: "Lora", color: "#666", marginTop: 25 },
  buttonsContainer: {
    flexDirection: "row",
    width: width * 0.9,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: "#F8BBD0",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginRight: 10,
  },
  nextText: { color: "#333333", fontWeight: "600", fontSize: 16 },
  shareBtn: {
    width: 60,
    backgroundColor: "#ff3366",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginRight: 10,
  },
  downloadBtn: {
    width: 60,
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
});
