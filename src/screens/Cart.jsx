import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  //const [cartItems, setCartItems] = useState([]);
  //const [total, setTotal] = useState(0);

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);

  // useEffect(() => {
  //   const total = allCartItems.reduce((acc, currentItem)=> acc += (currentItem.quantity * currentItem.price), 0)
  //   setTotal(total);
  //   setCartItems(allCartItems);
  // }, []);

  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text>Total: ${total}</Text>
        </>
      ) : (
        <Text>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
