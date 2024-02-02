import { StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Card style={{marginVertical: 20}}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});
