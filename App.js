import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Usuario from "./src/components/Usuario";
import cartLogo from "./assets/cart.png";

export default function App() {
  // useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Text>CARRITO</Text>
        {/* <Image style={{width: 50, height: 50}} source={{uri: "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"}}/> */}

        <Image style={{ width: 50, height: 50 }} source={cartLogo} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            width: "90%",
          }}
          placeholder="Ingrese un producto"
        />
        <TouchableOpacity>
          <Text style={{ fontSize: 40 }}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productList}>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
        <Text style={styles.product}>Remera</Text>
        <Text style={styles.product}>Pantalón</Text>
        <Text style={styles.product}>Gorra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
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
});
