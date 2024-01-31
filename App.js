import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import cartLogo from "./assets/cart.png";
import RemoveModal from "./src/components/RemoveModal";

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
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  //console.log('Hubo un error en el servidor (no es mi culpa)');

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      {/* El StatusBar controla la barra de estado del dispositivo */}
      <StatusBar style="auto" />

      {/* Llamamos al modal para eliminar el producto y le pasamos por props toda la data que necesita */}
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
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
            <View style={{ width: 400, flexDirection: "row" }}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>🚮</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
