// import React, { useState, useEffect } from "react";
// import { View, FlatList, TextInput, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import quotesData from "../assets/quotes.json";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import QuoteCard from "../components/QuoteCard";

// const cardColors = ["#fde2e4", "#e0f7fa", "#fff3e0", "#f3e5f5", "#e8f5e9"];

// export default function CategoryQuotes({ route }) {
//   const { category } = route.params;
//   const [favorites, setFavorites] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [filteredQuotes, setFilteredQuotes] = useState([]);

//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   useEffect(() => {
//     const filtered = quotesData.filter(
//       (q) =>
//         q.category.includes(category) &&
//         (q.quote.toLowerCase().includes(searchText.toLowerCase()) ||
//          q.author.toLowerCase().includes(searchText.toLowerCase()))
//     );
//     setFilteredQuotes(filtered);
//   }, [searchText, category]);

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
//       bgColor={cardColors[index % cardColors.length]}
//     />
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Search quotes..."
//           value={searchText}
//           onChangeText={setSearchText}
//           style={styles.searchInput}
//         />
//         <FlatList
//           data={filteredQuotes}
//           keyExtractor={(item) => item.quote}
//           renderItem={renderItem}
//           contentContainerStyle={{ paddingBottom: 40 }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: "#f3f4f6" },
//   container: { flex: 1, padding: 10 },
//   searchInput: {
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     fontSize: 16,
//   },
// });
import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput, StyleSheet, Text } from "react-native";
import quotesData from "../assets/quotes.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuoteCard from "../components/QuoteCard";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryQuotes({ route }) {
  const { category } = route.params;
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    const filtered = quotesData.filter(
      (q) =>
        q.category.includes(category) &&
        (q.quote.toLowerCase().includes(searchText.toLowerCase()) ||
          q.author.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredQuotes(filtered);
  }, [searchText, category]);

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

  const renderItem = ({ item }) => (
    <QuoteCard
      quote={item.quote}
      author={item.author}
      isFavorite={favorites.find((q) => q.quote === item.quote)}
      onToggleFavorite={() => toggleFavorite(item)}
    />
  );

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar on Top */}
      <TextInput
        placeholder="Search quotes..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      {/* 📌 Category Heading under search */}
      <View style={styles.categoryHeader}>
  <LinearGradient
    colors={["#ff9a9e", "#fad0c4"]} // soft pink gradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.categoryBadge}
  >
    <Ionicons name="star" size={18} color="#fff" style={{ marginRight: 6 }} />
    <Text style={styles.categoryText}>{category} Quotes</Text>
    <Ionicons name="star" size={18} color="#fff" style={{ marginLeft: 6 }} />
  </LinearGradient>
</View>

      {/* 📜 Quotes List */}
      <FlatList
        data={filteredQuotes}
        keyExtractor={(item) => item.quote}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFF8F0", 
    paddingTop: 30,  // 👈 top padding added
    paddingHorizontal: 10,
    marginTop: 15, 
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  categoryHeader: {
    marginBottom: 20,
    alignItems: "center",
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1,
  },
  
});
