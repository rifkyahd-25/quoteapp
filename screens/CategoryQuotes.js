// import React, { useState, useEffect } from "react";
// import { View, FlatList, TextInput, StyleSheet, Text } from "react-native";
// import quotesData from "../assets/quotes.json";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import QuoteCard from "../components/QuoteCard";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";

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
//           q.author.toLowerCase().includes(searchText.toLowerCase()))
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

//   const renderItem = ({ item }) => (
//     <QuoteCard
//       quote={item.quote}
//       author={item.author}
//       isFavorite={favorites.find((q) => q.quote === item.quote)}
//       onToggleFavorite={() => toggleFavorite(item)}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       {/* 🔍 Search Bar on Top */}
//       <TextInput
//         placeholder="Search quotes..."
//         value={searchText}
//         onChangeText={setSearchText}
//         style={styles.searchInput}
//       />

//       {/* 📌 Category Heading under search */}
//       <View style={styles.categoryHeader}>
//   <LinearGradient
//     colors={["#ff9a9e", "#fad0c4"]} // soft pink gradient
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 1 }}
//     style={styles.categoryBadge}
//   >
//     <Ionicons name="star" size={18} color="#fff" style={{ marginRight: 6 }} />
//     <Text style={styles.categoryText}>{category} Quotes</Text>
//     <Ionicons name="star" size={18} color="#fff" style={{ marginLeft: 6 }} />
//   </LinearGradient>
// </View>

//       {/* 📜 Quotes List */}
//       <FlatList
//         data={filteredQuotes}
//         keyExtractor={(item) => item.quote}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 40 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: "#FFF8F0", 
//     paddingTop: 30,  // 👈 top padding added
//     paddingHorizontal: 10,
//     marginTop: 15, 
//   },
//   searchInput: {
//     backgroundColor: "#fff",
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   categoryHeader: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   categoryBadge: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   categoryText: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#fff",
//     letterSpacing: 1,
//   },
  
// });



// import React, { useState, useEffect, useContext } from "react";
// import { View, FlatList, TextInput, StyleSheet, Text } from "react-native";
// import quotesData from "../assets/quotes.json";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import QuoteCard from "../components/QuoteCard";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import { ThemeContext } from "../context/ThemeContext"; // 👈 assume you have a ThemeProvider

// export default function CategoryQuotes({ route }) {
//   const { category } = route.params;
//   const { theme } = useContext(ThemeContext); // 👈 grab active theme
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
//           q.author.toLowerCase().includes(searchText.toLowerCase()))
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

//   const renderItem = ({ item }) => (
//     <QuoteCard
//       quote={item.quote}
//       author={item.author}
//       isFavorite={favorites.find((q) => q.quote === item.quote)}
//       onToggleFavorite={() => toggleFavorite(item)}
//     />
//   );

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       {/* 🔍 Search Bar */}
//       <TextInput
//         placeholder="Search quotes..."
//         placeholderTextColor={theme.textMuted}
//         value={searchText}
//         onChangeText={setSearchText}
//         style={[
//           styles.searchInput,
//           { backgroundColor: theme.card, color: theme.text, borderColor: theme.border },
//         ]}
//       />

//       {/* 📌 Category Heading */}
//       <View style={styles.categoryHeader}>
//         <LinearGradient
//           colors={[theme.primary, theme.textMuted]} // 👈 themed gradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.categoryBadge}
//         >
//           <Ionicons name="star" size={18} color={theme.card} style={{ marginRight: 6 }} />
//           <Text style={[styles.categoryText, { color: theme.card }]}>
//             {category} Quotes
//           </Text>
//           <Ionicons name="star" size={18} color={theme.card} style={{ marginLeft: 6 }} />
//         </LinearGradient>
//       </View>

//       {/* 📜 Quotes List */}
//       <FlatList
//         data={filteredQuotes}
//         keyExtractor={(item) => item.quote}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 40 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 10,
   
//   },
//   searchInput: {
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 10,
//     fontSize: 16,
//     borderWidth: 1,
//   },
//   categoryHeader: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   categoryBadge: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   categoryText: {
//     fontSize: 20,
//     fontWeight: "700",
//     letterSpacing: 1,
//   },
// });




// import React, { useState, useEffect, useContext } from "react";
// import { View, FlatList, TextInput, StyleSheet, Text } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import QuoteCard from "../components/QuoteCard";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import { ThemeContext } from "../context/ThemeContext";
// import { ActivityIndicator } from "react-native";
// import { useFonts } from "expo-font";

// export default function CategoryQuotes({ route }) {
 

//   const { category } = route.params;
//   const { theme } = useContext(ThemeContext);

//   const [quotesData, setQuotesData] = useState([]);
//   const [categoryQuotes, setCategoryQuotes] = useState([]);
//   const [filteredQuotes, setFilteredQuotes] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [searchText, setSearchText] = useState("");


//   const [fontsLoaded] = useFonts({
//     'Lora': require('../assets/fonts/Lora-VariableFont_wght.ttf'),
//   });

//   if (!fontsLoaded) return null;

//   // Lazy-load quotes.json
//   useEffect(() => {
//     const loadQuotes = async () => {
//       const data = await import("../assets/quotes.json");
//       setQuotesData(data.default);
//     };
//     loadQuotes();
//     loadFavorites();
//   }, []);

//   // Filter by category once
//   useEffect(() => {
//     const filtered = quotesData.filter((q) => q.category.includes(category));
//     setCategoryQuotes(filtered);
//     setFilteredQuotes(filtered); // default view
//   }, [quotesData, category]);

//   // Debounced search within categoryQuotes
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const searched = categoryQuotes.filter(
//         (q) =>
//           q.quote.toLowerCase().includes(searchText.toLowerCase()) ||
//           q.author.toLowerCase().includes(searchText.toLowerCase())
//       );
//       setFilteredQuotes(searched);
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText, categoryQuotes]);

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

//   const favoriteSet = new Set(favorites.map((q) => q.quote));

//   const renderItem = ({ item }) => (
//     <QuoteCard
//       quote={item.quote}
//       author={item.author}
//       isFavorite={favoriteSet.has(item.quote)}
//       onToggleFavorite={() => toggleFavorite(item)}
//     />
//   );

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       {/* 🔍 Search Bar */}
//       <TextInput
//         placeholder="Search quotes..."
//         placeholderTextColor={theme.textMuted}
//         value={searchText}
//         onChangeText={setSearchText}
//         style={[
//           styles.searchInput,
//           {
//             backgroundColor: theme.card,
//             color: theme.text,
//             borderColor: theme.border,
//           },
//         ]}
//       />

//       {/* 📌 Category Heading */}
//       <View style={styles.categoryHeader}>
//         <LinearGradient
//           colors={[theme.primary, theme.textMuted]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.categoryBadge}
//         >
//           <Ionicons name="star" size={18} color={theme.card} style={{ marginRight: 6 }} />
//           <Text style={[styles.categoryText, { color: theme.card }]}>
//             {category} Quotes
//           </Text>
//           <Ionicons name="star" size={18} color={theme.card} style={{ marginLeft: 6 }} />
//         </LinearGradient>
//       </View>

//       {/* 📜 Quotes List */}
//       <FlatList
//         data={filteredQuotes}
//         keyExtractor={(item) => item.quote}
//         renderItem={renderItem}
//         initialNumToRender={10}
//         maxToRenderPerBatch={10}
//         windowSize={5}
//         removeClippedSubviews={true}
//         contentContainerStyle={{ paddingBottom: 40 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 10,
//   },
//   searchInput: {
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 10,
//     fontSize: 16,
//     borderWidth: 1,
//   },
//   categoryHeader: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   categoryBadge: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   categoryText: {
//     fontSize: 20,
//     fontWeight: "700",
//     letterSpacing: 1,
//   },
// });






import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuoteCard from "../components/QuoteCard";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
// import { useFonts } from "expo-font";

export default function CategoryQuotes({ route }) {
  const { category } = route.params;
  const { theme } = useContext(ThemeContext);

  const [quotesData, setQuotesData] = useState([]);
  const [categoryQuotes, setCategoryQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const flatListRef = useRef();

  const [loadingQuotes, setLoadingQuotes] = useState(true);
// const [fontsLoaded] = useFonts({
//   Lora: require("../assets/fonts/Lora-VariableFont_wght.ttf"),
// });
 const [ready, setReady] = useState(false); // 👈 new state

useEffect(() => {
  const loadQuotes = async () => {
    const data = await import("../assets/quotes.json");
    setQuotesData(data.default);
    setLoadingQuotes(false);
  };
  loadQuotes();
  loadFavorites();
}, []);

useEffect(() => {
  if (!loadingQuotes) {
    setReady(true); // 👈 only render UI when everything is ready
  }
}, [loadingQuotes]);

useEffect(() => {
  const filtered = quotesData.filter((q) => q.category.includes(category));
  setCategoryQuotes(filtered);
  setFilteredQuotes(filtered);
}, [quotesData, category]);

useEffect(() => {
  const timeout = setTimeout(() => {
    const searched = categoryQuotes.filter(
      (q) =>
        q.quote.toLowerCase().includes(searchText.toLowerCase()) ||
        q.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuotes(searched);
  }, 300);
  return () => clearTimeout(timeout);
}, [searchText, categoryQuotes]);

useEffect(() => {
  const restoreScroll = async () => {
    const offsetStr = await AsyncStorage.getItem(`scroll_${category}`);
    const offset = offsetStr ? parseFloat(offsetStr) : 0;
    setTimeout(() => {
      if (flatListRef.current && offset > 0) {
        flatListRef.current.scrollToOffset({ offset, animated: false });
      }
    }, 100); // 👈 slight delay to ensure FlatList is mounted
  };
  if (filteredQuotes.length > 0) {
    restoreScroll();
  }
}, [filteredQuotes]);

  const handleScroll = async (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    await AsyncStorage.setItem(`scroll_${category}`, offsetY.toString());
  };

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

  const favoriteSet = new Set(favorites.map((q) => q.quote));

  const renderItem = ({ item }) => (
    <QuoteCard
      quote={item.quote}
      author={
        item.author
          ? item.author.split(",")[0].trim().toLowerCase()
          : ""
      }
      isFavorite={favoriteSet.has(item.quote)}
      onToggleFavorite={() => toggleFavorite(item)}
    />
  );

  if (!ready) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
        <Text style={{ marginTop: 20, color: theme.textMuted }}>Loading quotes...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
          {/* 📌 Category Heading */}
          <View style={styles.categoryHeader}>
        <LinearGradient
          colors={[theme.primary, theme.textMuted]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.categoryBadge}
        >
          <Ionicons name="star" size={18} color={theme.card} style={{ marginRight: 6 }} />
          <Text style={[styles.categoryText, { color: theme.card, fontFamily: "Lora" }]}>
            {category} Quotes
          </Text>
          <Ionicons name="star" size={18} color={theme.card} style={{ marginLeft: 6 }} />
        </LinearGradient>
      </View>
     
     
      {/* 🔍 Search Bar */}
      {/* <TextInput
        placeholder="Search quotes..."
        placeholderTextColor={theme.textMuted}
        value={searchText}
        onChangeText={setSearchText}
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.card,
            color: theme.text,
            borderColor: theme.border,
            fontFamily: "Lora",
          },
        ]}
      /> */}

 

      {/* 📜 Quotes List */}
      <FlatList
        ref={flatListRef}
        data={filteredQuotes}
        keyExtractor={(item) => item.quote}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
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
    letterSpacing: 1,
  },
});