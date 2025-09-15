// import React, { useEffect, useState } from "react";
// import { View, FlatList, Text } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import QuoteCard from "../components/QuoteCard"; // Import the QuoteCard component

// export default function Favorites() {
//   const [favorites, setFavorites] = useState([]);
//   const [downloadSize, setDownloadSize] = useState("48");
//   const [downloadColor, setDownloadColor] = useState("#000000");

//   useEffect(() => {
//     getFavorites();
//   }, []);

//   const getFavorites = async () => {
//     const fav = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
//     setFavorites(fav);
//   };

//   const toggleFavorite = async (quote) => {
//     const updated = favorites.filter((q) => q.quote !== quote.quote);
//     setFavorites(updated);
//     await AsyncStorage.setItem("favorites", JSON.stringify(updated));
//   };

//   if (favorites.length === 0)
//     return (
//       <Text style={{ textAlign: "center", marginTop: 20 }}>
//         No favorites yet!
//       </Text>
//     );

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       <FlatList
//         data={favorites}
//         keyExtractor={(item) => item.quote}
//         renderItem={({ item }) => (
//           <QuoteCard
//             quote={item.quote}
//             author={item.author}
//             isFavorite={true} // all in this screen are favorites
//             onToggleFavorite={() => toggleFavorite(item)}
//             downloadSize={downloadSize}
//             downloadColor={downloadColor}
//             bgColor="#fde2e4" // consistent default color
//           />
//         )}
//       />
//     </View>
//   );
// }
import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuoteCard from "../components/QuoteCard";
import { ThemeContext } from "../context/ThemeContext";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [downloadSize, setDownloadSize] = useState("48");
  const [downloadColor, setDownloadColor] = useState("#000000");
  const { theme } = useContext(ThemeContext); // 👈 get active theme

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    const fav = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
    setFavorites(fav);
  };

  const toggleFavorite = async (quote) => {
    const updated = favorites.filter((q) => q.quote !== quote.quote);
    setFavorites(updated);
    await AsyncStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (favorites.length === 0)
    return (
      <View style={[styles.emptyContainer, { backgroundColor: theme.background }]}>
        <Text style={[styles.emptyText, { color: theme.text }]}>
          No favorites yet!
        </Text>
      </View>
    );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.quote}
        renderItem={({ item }) => (
          <QuoteCard
            quote={item.quote}
            author={item.author}
            isFavorite={true} // all in this screen are favorites
            onToggleFavorite={() => toggleFavorite(item)}
            downloadSize={downloadSize}
            downloadColor={downloadColor}
            defaultBgColor={theme.card} // 👈 themed card background
            defaultTextColor={theme.text} // 👈 themed text
          />
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
