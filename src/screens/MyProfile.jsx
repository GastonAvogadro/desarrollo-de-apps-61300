import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

const MyProfile = ({navigation}) => {
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      {image ? null : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
          <Pressable style={styles.button} onPress={()=> navigation.navigate("Image Selector")}>
            <Text style={styles.text}>Add profile picture</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.blue_400,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 18,
    color: "white",
  },
});
