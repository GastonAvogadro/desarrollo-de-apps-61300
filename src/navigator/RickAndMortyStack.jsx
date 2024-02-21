import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RickAndMorty from "../screens/RickAndMorty";

const Stack = createNativeStackNavigator();

const RickAndMortyStack = () => {
  return (
    <Stack.Navigator initialRouteName="RickAndMorty">
      <Stack.Screen name="RickAndMorty" component={RickAndMorty} />
    </Stack.Navigator>
  );
};

export default RickAndMortyStack;