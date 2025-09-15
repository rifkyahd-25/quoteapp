import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

export default function CategoriesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryButton}
      onPress={() => navigation.navigate("AllQuotes", { category: item })}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        numColumns={2} // optional, for 2-column layout
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  categoryButton: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: { fontSize: 16, fontWeight: "bold", textTransform: "capitalize" },
});
