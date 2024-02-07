import { FlatList, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

function Categories({ setCategorySelected }) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem setCategorySelected={setCategorySelected} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;
