import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartItem = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.brand}</Text>
      <Text>{item.price}</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})