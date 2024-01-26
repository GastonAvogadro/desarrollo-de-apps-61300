import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  FlatList,
  Modal
} from "react-native";
import Usuario from "./src/components/Usuario";
import cartLogo from "./assets/cart.png";

const DATA = [
  {
    name: "Remera",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];

export default function App() {
  // useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([])

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime()
    }
    setCartItems([...cartItems, newItem])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>CARRITO</Text>
        {/* <Image style={{width: 50, height: 50}} source={{uri: "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"}}/> */}

        <Image style={styles.image} source={cartLogo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
      </View>
      <View style={styles.productList}>
        {/* {DATA.map((item) => (
          <View key={item.id}>
            <Text style={styles.product}>{item.name}</Text>
          </View>
        ))} */}

        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{width: 400}}>
              <Text style={styles.product}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Pressable onPress={handleAddCounter}>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
      </Pressable>
      <Text>Valor del input: {inputValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
  inputContainer: { flexDirection: "row" },
});
