// import React, { useRef, useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   FlatList,
// } from "react-native";
// import ViewShot from "react-native-view-shot";
// import { LinearGradient } from "expo-linear-gradient";
// import * as MediaLibrary from "expo-media-library";
// import { Ionicons } from "@expo/vector-icons";

// const COLORS = [
//   "#000000",
//   "#ffffff",
//   "#ff3366",
//   "#4cc9f0",
//   "#f72585",
//   "#7209b7",
//   "#3a0ca3",
//   "#4361ee",
// ];

// export default function QuoteCard({
//   quote,
//   author,
//   isFavorite,
//   onToggleFavorite,
//   downloadSize = 48,
//   defaultTextColor = "#000000",
//   defaultBgColor = "#fde2e4",
// }) {
//   const downloadRef = useRef();
//   const [textColor, setTextColor] = useState(defaultTextColor);
//   const [bgColor, setBgColor] = useState(defaultBgColor);
//   const [downloadModalVisible, setDownloadModalVisible] = useState(false);
//   const [readyToCapture, setReadyToCapture] = useState(false);

//   // Capture and save quote
//   const saveToGallery = async (uri) => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       if (status === "granted") {
//         const asset = await MediaLibrary.createAssetAsync(uri);
//         await MediaLibrary.createAlbumAsync("QuotesApp", asset, false);
//         alert("Saved to Gallery!");
//       } else {
//         alert("Permission required to save image.");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const downloadAsImage = async () => {
//     try {
//       // Wait a short time for ViewShot to render updated colors
//       setReadyToCapture(true);
//       setTimeout(async () => {
//         const uri = await downloadRef.current.capture();
//         await saveToGallery(uri);
//         setDownloadModalVisible(false);
//         setReadyToCapture(false);
//       }, 100);
//     } catch (error) {
//       console.log("Error capturing quote:", error);
//     }
//   };

//   const selectColor = (type, color) => {
//     if (type === "text") setTextColor(color);
//     if (type === "bg") setBgColor(color);
//   };

//   return (
//     <>
//       {/* Visible Quote Card */}
//       <LinearGradient colors={[bgColor, "#fff0e0"]} style={styles.card}>
//         <Text style={styles.quoteIcon}>“</Text>
//         <Text style={[styles.quote, { color: textColor }]}>{quote}</Text>
//         <Text style={[styles.author, { color: textColor }]}>{author ? author.toLowerCase() : ""}</Text>

//         <View style={styles.actions}>
//           <TouchableOpacity style={styles.favButton} onPress={onToggleFavorite}>
//             <Ionicons
//               name={isFavorite ? "heart" : "heart-outline"}
//               size={20}
//               color="#ff3366"
//             />
//             <Text style={styles.favText}>{isFavorite ? "Remove" : "Add"}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.downloadButton}
//             onPress={() => setDownloadModalVisible(true)}
//           >
//             <Ionicons name="download-outline" size={20} color="#007bff" />
//             <Text style={styles.downloadText}>Download</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>

//       {/* Hidden Download Card */}
//       <ViewShot
//         ref={downloadRef}
//         options={{ format: "png", quality: 1, result: "tmpfile" }}
//         style={styles.hiddenView}
//       >
//         <LinearGradient
//           colors={[bgColor, bgColor]}
//           style={styles.downloadCard}
//         >
//           <Text
//             style={{
//               fontSize: Number(downloadSize),
//               color: textColor,
//               textAlign: "center",
//               fontStyle: "italic",
//               fontWeight: "600",
//               fontSize: 64,
//             }}
//           >
//             "{quote}"
//           </Text>
//           <Text
//             style={{
//               fontSize: Number(downloadSize) * 0.5,
//               color: textColor,
//               textAlign: "center",
//               marginTop: 40,
//               fontStyle: "italic",
//             }}
//           >
//             - {author ? author.toLowerCase() : ""}
//           </Text>
//         </LinearGradient>
//       </ViewShot>

//       {/* Download Settings Modal */}
//       <Modal visible={downloadModalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalTitle}>Select Colors</Text>

//           <Text style={styles.modalSubtitle}>Text Color:</Text>
//           <FlatList
//             data={COLORS}
//             keyExtractor={(item, index) => `text-${item}-${index}`}
//             horizontal
//             contentContainerStyle={{ paddingHorizontal: 20, marginBottom: 15 }}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.colorCircle,
//                   { backgroundColor: item },
//                   item === textColor && { borderWidth: 3, borderColor: "#fff" },
//                 ]}
//                 onPress={() => selectColor("text", item)}
//               />
//             )}
//           />

//           <Text style={styles.modalSubtitle}>Background Color:</Text>
//           <FlatList
//             data={COLORS}
//             keyExtractor={(item, index) => `bg-${item}-${index}`}
//             horizontal
//             contentContainerStyle={{ paddingHorizontal: 20, marginBottom: 15 }}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.colorCircle,
//                   { backgroundColor: item },
//                   item === bgColor && { borderWidth: 3, borderColor: "#fff" },
//                 ]}
//                 onPress={() => selectColor("bg", item)}
//               />
//             )}
//           />

//           <TouchableOpacity style={styles.modalDownload} onPress={downloadAsImage}>
//             <Text style={{ color: "#fff", fontWeight: "600" }}>Download Now</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.modalClose}
//             onPress={() => setDownloadModalVisible(false)}
//           >
//             <Text style={{ color: "#fff" }}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     padding: 25,
//     borderRadius: 20,
//     marginVertical: 15,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 8 },
//     shadowRadius: 10,
//     elevation: 8,
//     alignItems: "center",
//     position: "relative",
//   },
//   quoteIcon: {
//     fontSize: 60,
//     color: "rgba(0,0,0,0.05)",
//     position: "absolute",
//     top: 10,
//     left: 20,
//   },
//   quote: {
//     fontSize: 17,
//     fontWeight: "600",
//     fontStyle: "italic",
//     textAlign: "center",
//     lineHeight: 32,
//     marginTop: 20,
//   },
//   author: {
//     fontSize: 16,
//     fontStyle: "italic",
//     marginTop: 20,
//   },
//   actions: {
//     flexDirection: "row",
//         justifyContent: "space-between",
//          width: "80%",
//         marginTop: 25.
//   },
//   favButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#ffe6f0",
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   downloadButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#e0f7ff",
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   favText: { color: "#ff3366", fontWeight: "600", marginLeft: 6 },
//   downloadText: { color: "#007bff", fontWeight: "600", marginLeft: 6 },
//   hiddenView: {
//     width: 1080,
//     height: 1080,
//     position: "absolute",
//     left: -2000,
//     top: -2000,
//   },
//   downloadCard: {
//     width: 1080,
//     height: 1080,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 60,
//     borderRadius: 40,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.6)",
//     justifyContent: "center",
//     paddingVertical: 50,
//   },
//   modalTitle: {
//     color: "#fff",
//     fontSize: 20,
//     textAlign: "center",
//     marginBottom: 20,
//     fontWeight: "600",
//   },
//   modalSubtitle: {
//     color: "#fff",
//     fontSize: 16,
//     marginBottom: 10,
//     marginLeft: 20,
//   },
//   colorCircle: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginHorizontal: 10,
//     borderWidth: 2,
//     borderColor: "#0000",
//   },
//   modalDownload: {
//     backgroundColor: "#4cc9f0",
//     marginHorizontal: 50,
//     paddingVertical: 12,
//     borderRadius: 30,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   modalClose: {
//     backgroundColor: "#ff3366",
//     marginHorizontal: 50,
//     marginTop: 15,
//     paddingVertical: 12,
//     borderRadius: 30,
//     alignItems: "center",
//   },
// });

import React, { useRef, useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import ViewShot from "react-native-view-shot";
import { LinearGradient } from "expo-linear-gradient";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext"; // <-- import Theme

const COLORS = [
  "#000000",
  "#ffffff",
  "#ff3366",
  "#4cc9f0",
  "#f72585",
  "#7209b7",
  "#3a0ca3",
  "#4361ee",
];

export default function QuoteCard({
  quote,
  author,
  isFavorite,
  onToggleFavorite,
  downloadSize = 48,
  defaultTextColor = "#000000",
  defaultBgColor = "#fde2e4",
}) {
  const { theme } = useContext(ThemeContext); // <-- use theme
  const downloadRef = useRef();
  const [textColor, setTextColor] = useState(defaultTextColor);
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [readyToCapture, setReadyToCapture] = useState(false);

  // Capture and save quote
  const saveToGallery = async (uri) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync("QuotesApp", asset, false);
        alert("Saved to Gallery!");
      } else {
        alert("Permission required to save image.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const downloadAsImage = async () => {
    try {
      setReadyToCapture(true);
      setTimeout(async () => {
        const uri = await downloadRef.current.capture();
        await saveToGallery(uri);
        setDownloadModalVisible(false);
        setReadyToCapture(false);
      }, 100);
    } catch (error) {
      console.log("Error capturing quote:", error);
    }
  };

  const selectColor = (type, color) => {
    if (type === "text") setTextColor(color);
    if (type === "bg") setBgColor(color);
  };

  return (
    <>
      {/* Visible Quote Card */}
      <LinearGradient
        colors={[theme.bigcard, theme.bigcard]}
        style={[styles.card, { shadowColor: theme.border }]}
      >
        <Text style={[styles.quoteIcon, { color: theme.textMuted }]}>“</Text>

        <Text style={[styles.quote, { color: theme.text }]}>{quote}</Text>
        <Text style={[styles.author, { color: theme.textMuted }]}>
          {author ? author.split(",")[0].trim().toLowerCase() : ""}
        </Text>

        <View style={styles.actions}>
          {/* Favorite Button */}
          <TouchableOpacity
            style={[
              styles.favButton,
              {
                backgroundColor: theme.mode === "dark" ? "#01675b" : "#ffe6f0",
              },
            ]}
            onPress={onToggleFavorite}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={20}
              color={theme.smcardtextcolor}
            />
            <Text style={[styles.favText, { color: theme.active }]}>
              {isFavorite ? "Remove" : "Add"}
            </Text>
          </TouchableOpacity>

          {/* Download Button */}
          <TouchableOpacity
            style={[
              styles.downloadButton,
              {
                backgroundColor: theme.mode === "dark" ? "#01675b" : "#e0f7ff",
              },
            ]}
            onPress={() => setDownloadModalVisible(true)}
          >
            <Ionicons name="download-outline" size={20} color={theme.active} />
            <Text style={[styles.downloadText, { color: theme.active }]}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Hidden Download Card */}
      <ViewShot
        ref={downloadRef}
        options={{ format: "png", quality: 1, result: "tmpfile" }}
        style={styles.hiddenView}
      >
        <LinearGradient
          colors={[bgColor || theme.card, bgColor || theme.card]}
          style={styles.downloadCard}
        >
          <Text
            style={{
              color: textColor || theme.text,
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "600",
              fontSize: 64,
            }}
          >
            "{quote}"
          </Text>
          <Text
            style={{
              fontSize: 32,
              color: textColor || theme.textMuted,
              textAlign: "center",
              marginTop: 40,
              fontStyle: "italic",
            }}
          >
            - {author ? author.split(",")[0].trim().toLowerCase() : ""}
          </Text>
        </LinearGradient>
      </ViewShot>

      {/* Download Settings Modal */}
      <Modal visible={downloadModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Colors</Text>

          <Text style={styles.modalSubtitle}>Text Color:</Text>
          <FlatList
            data={COLORS}
            keyExtractor={(item, index) => `text-${item}-${index}`}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20, marginBottom: 15 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.colorCircle,
                  { backgroundColor: item },
                  item === textColor && { borderWidth: 3, borderColor: "#fff" },
                ]}
                onPress={() => selectColor("text", item)}
              />
            )}
          />

          <Text style={styles.modalSubtitle}>Background Color:</Text>
          <FlatList
            data={COLORS}
            keyExtractor={(item, index) => `bg-${item}-${index}`}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20, marginBottom: 15 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.colorCircle,
                  { backgroundColor: item },
                  item === bgColor && { borderWidth: 3, borderColor: "#fff" },
                ]}
                onPress={() => selectColor("bg", item)}
              />
            )}
          />

          <TouchableOpacity
            style={[styles.modalDownload, { backgroundColor: theme.primary }]}
            onPress={downloadAsImage}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              Download Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalClose, { backgroundColor: "#ef4444" }]}
            onPress={() => setDownloadModalVisible(false)}
          >
            <Text style={{ color: "#fff" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    borderRadius: 20,
    marginVertical: 15,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 8,
    alignItems: "center",
    position: "relative",
  },
  quoteIcon: {
    fontSize: 60,
    position: "absolute",
    top: 10,
    left: 20,
    opacity: 0.1,
  },
  quote: {
    fontSize: 20,
    fontWeight: "600",
    // fontStyle: "italic",
    textAlign: "center",
    lineHeight: 32,
    marginTop: 20,
    fontFamily: "Lora",
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 25,
  },
  favButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 8,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 8,
  },
  favText: { fontWeight: "600", marginLeft: 6 },
  downloadText: { fontWeight: "600", marginLeft: 6 },
  hiddenView: {
    width: 1080,
    height: 1080,
    position: "absolute",
    left: -2000,
    top: -2000,
  },
  downloadCard: {
    width: 1080,
    height: 1080,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    borderRadius: 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    paddingVertical: 50,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600",
  },
  modalSubtitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 20,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#0000",
  },
  modalDownload: {
    marginHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  modalClose: {
    marginHorizontal: 50,
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
  },
});
