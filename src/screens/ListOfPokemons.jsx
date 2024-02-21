import { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Pressable, FlatList } from "react-native";

function ListOfPokemon() {
  const [counter, setCounter] = useState(1);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/${counter}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data.pokemon))
      .catch((err) => console.log(err));
  }, [counter]);

  return pokemons ? (
    <View>
      <Pressable onPress={() => setCounter(counter + 1)}>
        <Text style={styles.text}>Pokemons {counter}</Text>
      </Pressable>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => <Text>{item.pokemon.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  ) : (
    <Text>Cargando...</Text>
  );
}

export default ListOfPokemon;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});
