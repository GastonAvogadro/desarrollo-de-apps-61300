import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";

function Categories({navigation}) {
  return (
    <View style={styles.container}>
      <Counter />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
