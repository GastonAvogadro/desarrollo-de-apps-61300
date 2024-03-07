import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location"
import { colors } from "../global/colors";
import MapPreview from "../components/MapPreview";

const LocationSelector = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState(null);

  useEffect(()=> {
    (async ()=> {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setError("Permission to access location was denied");
            return
        }
        let location = await Location.getCurrentPositionAsync()
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text>My Adresses</Text>
      {location.latitude ? (
        <View style={styles.noLocationContainer}>
          <Text>Lat: {location.latitude}, long: {location.longitude}</Text>
          <MapPreview location={location}/>
        </View>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      paddingBottom: 130,
      paddingTop: 40,
    },
    noLocationContainer: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    address: {
      padding: 10,
      fontFamily: "InterRegular",
      fontSize: 16,
    },
    button: {
      width: "80%",
      elevation: 10,
      backgroundColor: colors.blue_400,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },
    text: {
      fontFamily: "InterRegular",
      fontSize: 18,
      color: "white",
    },
  });
  
