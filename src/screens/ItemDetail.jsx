import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ productDetailId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === productDetailId);
    setProduct(productFinded);
  }, [productDetailId]);

  return product ? (
    <View>
      <Text>{product.title}</Text>
    </View>
  ) : (
    <Text>Cargando...</Text>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
