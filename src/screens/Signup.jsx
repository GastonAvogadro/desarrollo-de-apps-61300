import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View>
    <Text>Register</Text>
    <InputForm label={"Email"} error={""} onChange={onChange} />
    <InputForm label={"Password"} error={""} onChange={onChange} />
    <InputForm label={"Confirm password"} error={""} onChange={onChange} />
    <Pressable>
      <Text>Register</Text>
    </Pressable>
  </View>
  )
}

export default Signup

const styles = StyleSheet.create({})