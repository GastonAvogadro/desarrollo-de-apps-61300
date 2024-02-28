import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories({ navigation }) {
  // const categories = useSelector((state) => state.shopReducer.value.categories);

  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <Counter />
      <FlatList
        data={data}
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
