import { StatusBar } from "expo-status-bar";
import TabNavigator from "./src/navigator/TabNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <TabNavigator />
    </>
  );
}
