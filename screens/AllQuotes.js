// import React, { useState, useEffect } from "react";
// import {
//   View,
//   FlatList,
//   TextInput,
//   StyleSheet,
//   Dimensions
// } from "react-native";
// import quotesData from "../assets/quotes.json";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import QuoteCard from "../components/QuoteCard";
// import { Picker } from "@react-native-picker/picker";

// const { width } = Dimensions.get("window");
// const cardColors = ["#fde2e4", "#e0f7fa", "#fff3e0", "#f3e5f5", "#e8f5e9"];

// export default function AllQuotes() {
//   const [favorites, setFavorites] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [filteredQuotes, setFilteredQuotes] = useState(quotesData);
//   const [downloadSize, setDownloadSize] = useState("16");
//   const [downloadColor, setDownloadColor] = useState("#000000");

//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   useEffect(() => {
//     const filtered = quotesData.filter(
//       q =>
//         q.quote.toLowerCase().includes(searchText.toLowerCase()) ||
//         q.author.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredQuotes(filtered);
//   }, [searchText]);

//   const loadFavorites = async () => {
//     const fav = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
//     setFavorites(fav);
//   };

//   const toggleFavorite = async (quote) => {
//     let updated;
//     if (favorites.find((q) => q.quote === quote.quote)) {
//       updated = favorites.filter((q) => q.quote !== quote.quote);
//     } else {
//       updated = [...favorites, quote];
//     }
//     setFavorites(updated);
//     await AsyncStorage.setItem("favorites", JSON.stringify(updated));
//   };

//   const renderItem = ({ item, index }) => (
//     <QuoteCard
//       quote={item.quote}
//       author={item.author}
//       isFavorite={favorites.find((q) => q.quote === item.quote)}
//       onToggleFavorite={() => toggleFavorite(item)}
//       downloadSize={downloadSize}
//       downloadColor={downloadColor}
//       bgColor={cardColors[index % cardColors.length]}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Search quotes..."
//         value={searchText}
//         onChangeText={setSearchText}
//         style={styles.searchInput}
//       />

//       <View style={styles.pickersContainer}>
//         <Picker
//           selectedValue={downloadSize}
//           onValueChange={(value) => setDownloadSize(value)}
//           style={styles.picker}
//         >
//           <Picker.Item label="16" value="16" />
//           <Picker.Item label="20" value="20" />
//           <Picker.Item label="24" value="24" />
//         </Picker>

//         <Picker
//           selectedValue={downloadColor}
//           onValueChange={(value) => setDownloadColor(value)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Black" value="#000000" />
//           <Picker.Item label="Red" value="#ff0000" />
//           <Picker.Item label="Blue" value="#0000ff" />
//         </Picker>
//       </View>

//       <FlatList
//         data={filteredQuotes}
//         keyExtractor={(item) => item.quote}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: "#f3f4f6" },
//   searchInput: {
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   pickersContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   picker: { flex: 1 },
// });
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import quotesData from "../assets/quotes.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuoteCard from "../components/QuoteCard";


const cardColors = ["#fde2e4", "#e0f7fa", "#fff3e0", "#f3e5f5", "#e8f5e9"];

export default function AllQuotes() {
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState(quotesData);
  const [downloadSize, setDownloadSize] = useState("16");
  const [downloadColor, setDownloadColor] = useState("#000000");

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    const filtered = quotesData.filter(
      (q) =>
        q.quote.toLowerCase().includes(searchText.toLowerCase()) ||
        q.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuotes(filtered);
  }, [searchText]);

  const loadFavorites = async () => {
    const fav = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
    setFavorites(fav);
  };

  const toggleFavorite = async (quote) => {
    let updated;
    if (favorites.find((q) => q.quote === quote.quote)) {
      updated = favorites.filter((q) => q.quote !== quote.quote);
    } else {
      updated = [...favorites, quote];
    }
    setFavorites(updated);
    await AsyncStorage.setItem("favorites", JSON.stringify(updated));
  };

  const renderItem = ({ item, index }) => (
    <QuoteCard
      quote={item.quote}
      author={item.author}
      isFavorite={favorites.find((q) => q.quote === item.quote)}
      onToggleFavorite={() => toggleFavorite(item)}
      downloadSize={downloadSize}
      downloadColor={downloadColor}
      bgColor={cardColors[index % cardColors.length]}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search quotes..."
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />

       

        <FlatList
          data={filteredQuotes}
          keyExtractor={(item) => item.quote}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }} // extra bottom padding
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f3f4f6" },
  container: { flex: 1, padding: 10 },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  
});
