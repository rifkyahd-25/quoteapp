// import React, { useRef } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import ViewShot from "react-native-view-shot";
// import * as FileSystem from "expo-file-system/legacy";
// import * as Sharing from "expo-sharing";

// export default function QuoteCard({
//   quote,
//   author,
//   isFavorite,
//   onToggleFavorite,
//   downloadSize = 48,
//   downloadColor = "#000000",
//   bgColor = "#fde2e4",
// }) {
//   const downloadRef = useRef();

//   const downloadAsImage = async () => {
//     try {
//       // Capture the hidden 1080x1080 view
//       const uri = await downloadRef.current.capture();

//       const fileUri = FileSystem.documentDirectory + "quote.png";
//       await FileSystem.copyAsync({ from: uri, to: fileUri });

//       await Sharing.shareAsync(fileUri);
//     } catch (error) {
//       console.log("Error capturing quote:", error);
//     }
//   };

//   return (
//     <>
//       {/* Visible card with favorites */}
//       <View style={[styles.card, { backgroundColor: bgColor }]}>
//         <Text style={styles.quote}>"{quote}"</Text>
//         <Text style={styles.author}>- {author}</Text>

//         <View style={styles.actions}>
//           <TouchableOpacity onPress={onToggleFavorite}>
//             <Text style={styles.favText}>
//               {isFavorite ? "💖 Remove" : "🤍 Add to Favorites"}
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={downloadAsImage}>
//             <Text style={styles.downloadText}>⬇ Download</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Hidden View for 1080x1080 download */}
//       <ViewShot
//         ref={downloadRef}
//         options={{ format: "png", quality: 1, result: "tmpfile" }}
//         style={styles.hiddenView}
//       >
//         <View style={[styles.downloadCard, { backgroundColor: bgColor }]}>
//           <Text
//             style={{
//               fontSize: Number(downloadSize),
//               color: downloadColor,
//               textAlign: "center",
//             }}
//           >
//             "{quote}"
//           </Text>
//           <Text
//             style={{
//               fontSize: Number(downloadSize) * 0.5,
//               color: downloadColor,
//               textAlign: "center",
//               marginTop: 20,
//             }}
//           >
//             - {author}
//           </Text>
//         </View>
//       </ViewShot>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     padding: 20,
//     borderRadius: 15,
//     marginVertical: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 6,
//     alignItems: "center",
//   },
//   quote: { fontSize: 18, fontWeight: "500", marginBottom: 10, textAlign: "center" },
//   author: { fontStyle: "italic", color: "#555", textAlign: "center" },
//   actions: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
//   favText: { color: "#ff3366", fontWeight: "600" },
//   downloadText: { color: "#007bff", fontWeight: "600" },

//   // Hidden download view
//   hiddenView: {
//     width: 1080,
//     height: 1080,
//     position: "absolute",
//     left: -2000, // move offscreen
//     top: -2000,
//   },
//   downloadCard: {
//     width: 1080,
//     height: 1080,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 40,
//   },
// });











// import React, { useRef } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import ViewShot from "react-native-view-shot";
// import * as FileSystem from "expo-file-system/legacy";
// import * as Sharing from "expo-sharing";
// import { LinearGradient } from "expo-linear-gradient";

// import { Ionicons } from "@expo/vector-icons";

// export default function QuoteCard({
//   quote,
//   author,
//   isFavorite,
//   onToggleFavorite,
//   downloadSize = 48,
//   downloadColor = "#000000",
//   bgColor = "#fde2e4",
// }) {
//   const downloadRef = useRef();

//   const downloadAsImage = async () => {
//     try {
//       const uri = await downloadRef.current.capture();
//       const fileUri = FileSystem.documentDirectory + "quote.png";
//       await FileSystem.copyAsync({ from: uri, to: fileUri });
//       await Sharing.shareAsync(fileUri);
//     } catch (error) {
//       console.log("Error capturing quote:", error);
//     }
//   };

//   return (
//     <>
//       {/* Visible Card */}
//       <LinearGradient
//         colors={["#fde2e4", "#ffe0b2"]}
//         style={styles.card}
//       >
//         <Text style={styles.quoteIcon}>“</Text>
//         <Text style={styles.quote}>{quote}</Text>
//         <Text style={styles.author}>- {author}</Text>

//         <View style={styles.actions}>
//           <TouchableOpacity style={styles.favButton} onPress={onToggleFavorite}>
//             <Ionicons
//               name={isFavorite ? "heart" : "heart-outline"}
//               size={20}
//               color="#ff3366"
//             />
//             <Text style={styles.favText}>
//               {isFavorite ? "Remove" : "Add"}
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.downloadButton} onPress={downloadAsImage}>
//             <Ionicons name="download-outline" size={20} color="#007bff" />
//             <Text style={styles.downloadText}>Download</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>

//       {/* Hidden download view */}
//       <ViewShot
//         ref={downloadRef}
//         options={{ format: "png", quality: 1, result: "tmpfile" }}
//         style={styles.hiddenView}
//       >
//         <LinearGradient
//           colors={["#fde2e4", "#ffe0b2"]}
//           style={styles.downloadCard}
//         >
//           <Text
//             style={{
//               fontSize: Number(downloadSize),
//               color: downloadColor,
//               textAlign: "center",
//               fontStyle: "italic",
//               fontWeight: "600",
//             }}
//           >
//             "{quote}"
//           </Text>
//           <Text
//             style={{
//               fontSize: Number(downloadSize) * 0.5,
//               color: downloadColor,
//               textAlign: "center",
//               marginTop: 40,
//               fontStyle: "italic",
//             }}
//           >
//             - {author}
//           </Text>
//         </LinearGradient>
//       </ViewShot>
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
//     fontSize: 20,
//     fontWeight: "600",
//     fontStyle: "italic",
//     textAlign: "center",
//     color: "#333",
//     lineHeight: 32,
//     marginTop: 20,
//   },
//   author: {
//     fontSize: 16,
//     fontStyle: "italic",
//     color: "#666",
//     marginTop: 20,
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "80%",
//     marginTop: 25,
//   },
//   favButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#ffe6f0",
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 12,
//   },
//   downloadButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#e0f7ff",
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 12,
//   },
//   favText: { color: "#ff3366", fontWeight: "600", marginLeft: 6 },
//   downloadText: { color: "#007bff", fontWeight: "600", marginLeft: 6 },

//   // Hidden download view
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
// });

import React, { useRef, useState, useEffect } from "react";
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
      // Wait a short time for ViewShot to render updated colors
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
      <LinearGradient colors={[bgColor, "#fff0e0"]} style={styles.card}>
        <Text style={styles.quoteIcon}>“</Text>
        <Text style={[styles.quote, { color: textColor }]}>{quote}</Text>
        <Text style={[styles.author, { color: textColor }]}>{author}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.favButton} onPress={onToggleFavorite}>
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={20}
              color="#ff3366"
            />
            <Text style={styles.favText}>{isFavorite ? "Remove" : "Add"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => setDownloadModalVisible(true)}
          >
            <Ionicons name="download-outline" size={20} color="#007bff" />
            <Text style={styles.downloadText}>Download</Text>
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
          colors={[bgColor, bgColor]}
          style={styles.downloadCard}
        >
          <Text
            style={{
              fontSize: Number(downloadSize),
              color: textColor,
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
              fontSize: Number(downloadSize) * 0.5,
              color: textColor,
              textAlign: "center",
              marginTop: 40,
              fontStyle: "italic",
            }}
          >
            - {author}
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

          <TouchableOpacity style={styles.modalDownload} onPress={downloadAsImage}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>Download Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalClose}
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 8,
    alignItems: "center",
    position: "relative",
  },
  quoteIcon: {
    fontSize: 60,
    color: "rgba(0,0,0,0.05)",
    position: "absolute",
    top: 10,
    left: 20,
  },
  quote: {
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 32,
    marginTop: 20,
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 25,
  },
  favButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffe6f0",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 8,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0f7ff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 8,
  },
  favText: { color: "#ff3366", fontWeight: "600", marginLeft: 6 },
  downloadText: { color: "#007bff", fontWeight: "600", marginLeft: 6 },
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
    backgroundColor: "#4cc9f0",
    marginHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  modalClose: {
    backgroundColor: "#ff3366",
    marginHorizontal: 50,
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
  },
});
