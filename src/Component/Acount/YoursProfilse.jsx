import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function YourProfile() {
  return (
    <View style={styles.card}>
      <Ionicons name="person-outline" size={30} color="gray" />
      <Text style={styles.text}>Your profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCF0F5',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    margin: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
    color: '#333',
  },
});
