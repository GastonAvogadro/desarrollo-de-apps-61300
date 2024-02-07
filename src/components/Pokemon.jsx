import { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

function Pokemon() {
  const [counter, setCounter] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [counter]);

  return pokemon ? (
    <View>
      <Pressable onPress={() => setCounter(counter + 1)}>
        <Text style={styles.text}>Pokemon {counter}</Text>
      </Pressable>
      <Text>{pokemon.name}</Text>
      <Image style={styles.image} source={{ uri: pokemon.sprites.front_default }} />
    </View>
  ) : (
    <Text>Cargando...</Text>
  );
}

export default Pokemon;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});
