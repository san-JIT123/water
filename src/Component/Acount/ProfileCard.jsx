import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import YourProfile from './YoursProfilse';
import { useNavigation } from '@react-navigation/native';

export default function ProfileCard() {
  const navigation = useNavigation()

  return (
     
      <View style={styles.card}>
        <Pressable onPress={()=>{navigation.navigate("Acount from")}}>
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Sanjit</Text>
          <Text style={styles.email}>skkeleng@gmail.com</Text>
        </View>
      </View>
      <YourProfile />
       </Pressable>
    </View>
   
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    elevation: 2,
    overflow: 'hidden',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCF0F5',
    padding: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
});
