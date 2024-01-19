import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/components/Usuario'

export default function App() {
  return (
    <View style={{paddingTop: 20, paddingHorizontal: 25}}>
      <Text>Usuarios</Text>
      <Usuario usuario="Fernando"/>
      <Usuario usuario="Mariano"/>
      <Usuario usuario="Gisel"/>
      <Usuario usuario="Flavia"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
