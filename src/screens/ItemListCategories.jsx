import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  // const productsFilteredByCategory = useSelector(
  //   (state) => state.shopReducer.value.productsFilteredByCategory
  // );

  const category = useSelector((state)=> state.shopReducer.value.categorySelected);
  const { data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    console.log(productsFilteredByCategory);
    if (productsFilteredByCategory) {
        const productsRaw = Object.values(productsFilteredByCategory)
        const productsFiltered = productsRaw.filter((product) =>
            product.title.includes(keyword)
        );
        setProducts(productsFiltered);
    }
}, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
