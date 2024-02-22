import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable  onPress={()=> dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "gray",
  },
  span: {
    width: "43%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "InterRegular",
  },
  spanInput: {
    width: "43%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "InterRegular",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "InterRegular",
    color: "white",
  },
});
