import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import Pokemon from "./src/components/Pokemon";
import ListOfPokemon from "./src/components/ListOfPokemons";

export default function App() {
  const [showHome, setShowHome] = useState(true);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable onPress={()=> setShowHome(true)}>
        <Text>Home</Text>
      </Pressable>
      <Pressable onPress={()=> setShowHome(false)}>
        <Text>List of pokemons</Text>
      </Pressable>
      {showHome ? <Pokemon /> : <ListOfPokemon />}
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
