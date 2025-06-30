 import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Pressable } from 'react-native';
import AnimatedViewHome from './AnimatedViewHome'; // 👈 Animation wrapper
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', logo: require('../../assets/images/tanK_Logo1.png'), name: 'Tank' },
  { id: '2', logo: require('../../assets/images/dram-logo1.png'), name: '20Ltr Jar' },
  { id: '3', logo: require('../../assets/images/water-Bottle1.png'), name: 'Water Bottle' },
];

export default function HorizontalLogoGrid() {
  const navigation = useNavigation()

 const itemsPress =(event)=>{
    if(event.id =='2'){
      navigation.navigate('ProductDetails')
    }
 }
  
  return (
    <AnimatedViewHome delay={400}>
      <View style={styles.container}>
        <Text style={styles.heading}>Products</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
           <Pressable onPress={() => { itemsPress(item)}}>
             <View style={styles.card} >
              <Image source={item.logo} style={styles.logo} resizeMode="contain" />
              <Text style={styles.text}>{item.name}</Text>
            </View>
           </Pressable>
          )}
        />
      </View>
    </AnimatedViewHome>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#DCF0F5',
    borderRadius: 10,
    marginHorizontal: 6,
    paddingVertical: 10,
    width: 130,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});
