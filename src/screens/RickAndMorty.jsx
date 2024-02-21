import { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

function RickAndMorty({ navigation }) {
  const [counter, setCounter] = useState(1);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${counter}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((err) => console.log(err));
  }, [counter]);

  return character ? (
    <View>
      <Pressable onPress={() => setCounter(counter + 1)}>
        <Text style={styles.text}>Pokemon {counter}</Text>
      </Pressable>
      <Text>{character.name}</Text>
      <Image style={styles.image} source={{ uri: character.image }} />
    </View>
  ) : (
    <Text>Cargando...</Text>
  );
}

export default RickAndMorty;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});
