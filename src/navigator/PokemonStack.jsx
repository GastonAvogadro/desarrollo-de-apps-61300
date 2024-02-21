import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "../screens/Pokemon";
import ListOfPokemon from "../screens/ListOfPokemons";

const Stack = createNativeStackNavigator();

const PokemonStack = () => {
  return (
    <Stack.Navigator initialRouteName="Pokemon">
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="ListOfPokemon" component={ListOfPokemon} />
    </Stack.Navigator>
  );
};

export default PokemonStack;
