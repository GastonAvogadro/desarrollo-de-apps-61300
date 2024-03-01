import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputForm from "../components/InputForm";

const Login = () => {
  const onChange = () => {};

  return (
    <View>
      <Text>Login</Text>
      <InputForm label={"Email"} error={""} onChange={onChange} />
      <InputForm label={"Password"} error={""} onChange={onChange} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
