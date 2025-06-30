 import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedViewHome from './AnimatedViewHome';
import { useNavigation } from '@react-navigation/native';
 

export default function Bar() {
const navigation=  useNavigation()
  return (
    <AnimatedViewHome delay={200}>
      <View style={styles.container}>
        <Pressable onPress={()=>{navigation.navigate("Acount")}}>
          <Image
          source={require('../../assets/images/image2.jpg')}
          style={styles.avatar}
        />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.subText}>Select Your Products</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </AnimatedViewHome>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCF0F5',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 60,
    margin: 15,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fcdede',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
  iconContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 25,
    elevation: 2,
  },
});
