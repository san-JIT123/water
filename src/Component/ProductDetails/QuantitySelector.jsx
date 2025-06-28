import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function QuantitySelector({ quantity, setQuantity }) {
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <View style={styles.container}>
      <Pressable onPress={decrease} style={styles.button}>
        <Text style={styles.text}>−</Text>
      </Pressable>
      <Text style={styles.number}>{quantity}</Text>
      <Pressable onPress={increase} style={styles.button}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
    padding: 10
  },
  text: {
    fontSize: 22,
    // color: '#1aa3ff',
    fontWeight: 'bold'


  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 8,
    color: '#1aa3ff',
  },
});
