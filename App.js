import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import { fonts } from "./src/global/fonts";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const [categorySelected, setCategorySelected] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
