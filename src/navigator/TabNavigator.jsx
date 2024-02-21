import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokemonStack from "./PokemonStack";
import RickAndMortyStack from "./RickAndMortyStack";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="PokemonTab" component={PokemonStack} />
        <Tab.Screen name="RickAndMortyTab" component={RickAndMortyStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
