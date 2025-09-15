// import React from "react";
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const categories = [
//   "motivation", "inspirational", "life", "success", "positivity", "courage",
//   "determination", "growth", "mindset", "happiness", "gratitude", "wisdom",
//   "selflove", "kindness", "hope", "dreams", "love", "relationship",
//   "friendship", "trust", "heart", "compassion", "forgiveness", "respect",
//   "loyalty", "family", "strength", "patience", "focus", "faith", "destiny",
//   "believe", "peace", "smile", "confidence", "humility", "truth", "honesty",
//   "freedom", "purpose", "healing", "calm", "ambition", "clarity", "change",
//   "discipline", "passion", "mindfulness", "resilience", "vision"
// ];

// export default function CategoriesScreen({ navigation }) {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.categoryButton}
//       onPress={() => navigation.navigate("CategoryQuotes", { category: item })}
//     >
//       <Text style={styles.categoryText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//    <>
//    <FlatList
//         data={categories}
//         keyExtractor={(item) => item}
//         renderItem={renderItem}
//         numColumns={2} // optional, for 2-column layout
//         contentContainerStyle={{ padding: 10 }}
//       />
//    </>
      

//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f3f4f6" },
//   categoryButton: {
//     flex: 1,
//     margin: 5,
//     padding: 20,
//     backgroundColor: "#e0f7fa",
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   categoryText: { fontSize: 16, fontWeight: "bold", textTransform: "capitalize" },
// });
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const categories = [
  "motivation", "inspirational", "life", "success", "positivity", "courage",
  "determination", "growth", "mindset", "happiness", "gratitude", "wisdom",
  "selflove", "kindness", "hope", "dreams", "love", "relationship",
  "friendship", "trust", "heart", "compassion", "forgiveness", "respect",
  "loyalty", "family", "strength", "patience", "focus", "faith", "destiny",
  "believe", "peace", "smile", "confidence", "humility", "truth", "honesty",
  "freedom", "purpose", "healing", "calm", "ambition", "clarity", "change",
  "discipline", "passion", "mindfulness", "resilience", "vision"
];

// Mapping for icons + subtitles
const categoryData = {
  motivation: { icon: <Ionicons name="rocket-outline" size={28} color="#0097A7" />, subtitle: "Quotes to boost your drive" },
  inspirational: { icon: <Ionicons name="bulb-outline" size={28} color="#0097A7" />, subtitle: "Quotes to inspire and uplift" },
  life: { icon: <Ionicons name="leaf-outline" size={28} color="#0097A7" />, subtitle: "Quotes about life and growth" },
  success: { icon: <Ionicons name="trophy-outline" size={28} color="#0097A7" />, subtitle: "Quotes about achieving success" },
  positivity: { icon: <Ionicons name="sunny-outline" size={28} color="#0097A7" />, subtitle: "Quotes to stay positive" },
  courage: { icon: <Ionicons name="shield-outline" size={28} color="#0097A7" />, subtitle: "Quotes about bravery" },
  determination: { icon: <Ionicons name="flag-outline" size={28} color="#0097A7" />, subtitle: "Quotes to keep you determined" },
  growth: { icon: <Ionicons name="trending-up-outline" size={28} color="#0097A7" />, subtitle: "Quotes about personal growth" },
  mindset: { icon: <Ionicons name="brain-outline" size={28} color="#0097A7" />, subtitle: "Quotes to shape your mindset" },
  happiness: { icon: <Ionicons name="happy-outline" size={28} color="#0097A7" />, subtitle: "Quotes to bring happiness" },
  gratitude: { icon: <Ionicons name="heart-circle-outline" size={28} color="#0097A7" />, subtitle: "Quotes about thankfulness" },
  wisdom: { icon: <FontAwesome5 name="owl" size={28} color="#0097A7" />, subtitle: "Quotes of insight and wisdom" },
  selflove: { icon: <Ionicons name="person-outline" size={28} color="#0097A7" />, subtitle: "Quotes about loving yourself" },
  kindness: { icon: <Ionicons name="hand-left-outline" size={28} color="#0097A7" />, subtitle: "Quotes about kindness" },
  hope: { icon: <Ionicons name="sparkles-outline" size={28} color="#0097A7" />, subtitle: "Quotes to keep hope alive" },
  dreams: { icon: <Ionicons name="cloud-outline" size={28} color="#0097A7" />, subtitle: "Quotes about chasing dreams" },
  love: { icon: <Ionicons name="heart" size={28} color="#0097A7" />, subtitle: "Quotes about love" },
  relationship: { icon: <Ionicons name="people-outline" size={28} color="#0097A7" />, subtitle: "Quotes on relationships" },
  friendship: { icon: <Ionicons name="chatbubble-outline" size={28} color="#0097A7" />, subtitle: "Quotes about true friends" },
  trust: { icon: <Ionicons name="lock-closed-outline" size={28} color="#0097A7" />, subtitle: "Quotes about trust" },
  heart: { icon: <Ionicons name="heart-circle-outline" size={28} color="#0097A7" />, subtitle: "Heartfelt quotes" },
  compassion: { icon: <Ionicons name="hand-right-outline" size={28} color="#0097A7" />, subtitle: "Quotes on compassion" },
  forgiveness: { icon: <Ionicons name="refresh-outline" size={28} color="#0097A7" />, subtitle: "Quotes about forgiveness" },
  respect: { icon: <Ionicons name="ribbon-outline" size={28} color="#0097A7" />, subtitle: "Quotes on respect" },
  loyalty: { icon: <Ionicons name="shield-checkmark-outline" size={28} color="#0097A7" />, subtitle: "Quotes on loyalty" },
  family: { icon: <Ionicons name="home-outline" size={28} color="#0097A7" />, subtitle: "Quotes about family" },
  strength: { icon: <Ionicons name="fitness-outline" size={28} color="#0097A7" />, subtitle: "Quotes about strength" },
  patience: { icon: <Ionicons name="time-outline" size={28} color="#0097A7" />, subtitle: "Quotes on patience" },
  focus: { icon: <Ionicons name="eye-outline" size={28} color="#0097A7" />, subtitle: "Quotes to stay focused" },
  faith: { icon: <Ionicons name="book-outline" size={28} color="#0097A7" />, subtitle: "Quotes on faith" },
  destiny: { icon: <Ionicons name="star-outline" size={28} color="#0097A7" />, subtitle: "Quotes on destiny" },
  believe: { icon: <Ionicons name="checkmark-done-outline" size={28} color="#0097A7" />, subtitle: "Quotes about believing" },
  peace: { icon: <Ionicons name="leaf-outline" size={28} color="#0097A7" />, subtitle: "Quotes about peace" },
  smile: { icon: <Ionicons name="happy-outline" size={28} color="#0097A7" />, subtitle: "Quotes to make you smile" },
  confidence: { icon: <Ionicons name="thumbs-up-outline" size={28} color="#0097A7" />, subtitle: "Quotes to build confidence" },
  humility: { icon: <Ionicons name="person-remove-outline" size={28} color="#0097A7" />, subtitle: "Quotes about humility" },
  truth: { icon: <Ionicons name="help-circle-outline" size={28} color="#0097A7" />, subtitle: "Quotes about truth" },
  honesty: { icon: <Ionicons name="shield-outline" size={28} color="#0097A7" />, subtitle: "Quotes on honesty" },
  freedom: { icon: <Ionicons name="flag-outline" size={28} color="#0097A7" />, subtitle: "Quotes about freedom" },
  purpose: { icon: <Ionicons name="compass-outline" size={28} color="#0097A7" />, subtitle: "Quotes about purpose" },
  healing: { icon: <Ionicons name="medkit-outline" size={28} color="#0097A7" />, subtitle: "Quotes about healing" },
  calm: { icon: <Ionicons name="water-outline" size={28} color="#0097A7" />, subtitle: "Quotes about calmness" },
  ambition: { icon: <Ionicons name="rocket-outline" size={28} color="#0097A7" />, subtitle: "Quotes about ambition" },
  clarity: { icon: <Ionicons name="eye-outline" size={28} color="#0097A7" />, subtitle: "Quotes on clarity" },
  change: { icon: <Ionicons name="sync-outline" size={28} color="#0097A7" />, subtitle: "Quotes about change" },
  discipline: { icon: <Ionicons name="clipboard-outline" size={28} color="#0097A7" />, subtitle: "Quotes about discipline" },
  passion: { icon: <Ionicons name="flame-outline" size={28} color="#0097A7" />, subtitle: "Quotes on passion" },
  mindfulness: { icon: <Ionicons name="infinite-outline" size={28} color="#0097A7" />, subtitle: "Quotes on mindfulness" },
  resilience: { icon: <Ionicons name="shield-half-outline" size={28} color="#0097A7" />, subtitle: "Quotes on resilience" },
  vision: { icon: <Ionicons name="eye-outline" size={28} color="#0097A7" />, subtitle: "Quotes on vision" },
};

export default function CategoriesScreen({ navigation }) {
  const renderItem = ({ item }) => {
    const { icon, subtitle } = categoryData[item] || {
      icon: <Ionicons name="ellipse-outline" size={28} color="#0097A7" />,
      subtitle: "Quotes for inspiration",
    };

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("CategoryQuotes", { category: item })}
      >
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E0F7FA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "600", color: "#111", textTransform: "capitalize" },
  subtitle: { fontSize: 14, color: "#555", marginTop: 2 },
});
