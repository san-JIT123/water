import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Button } from 'react-native';
import AnimatedViewHome from './AnimatedViewHome'; // Optional animation wrapper

const data = [
  { id: '1', logo: require('../../assets/images/tank-logo2.png'), name: '750 Ltr Water', price: '750' },
  { id: '2', logo: require('../../assets/images/tank-logo2.png'), name: '1000 Ltr Water', price: '1000' },
  { id: '3', logo: require('../../assets/images/tank-logo2.png'), name: '2000 Ltr Water', price: '2000' },
];

export default function VerticalLogoList() {
  return (
    <AnimatedViewHome delay={600}> 
      <View style={styles.container}>
        <Text style={styles.heading}>Quantity</Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.textSection}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.detail}>Fast Delivery</Text>
                  <Text style={styles.detail}>Rs. {item.price}</Text>
                  <View style={styles.buttonContainer}>
                    <Button title="Order" color="#007BFF" onPress={() => {}} />
                  </View>
                </View>
                <Image source={item.logo} style={styles.logo} resizeMode="contain" />
              </View>
            </View>
          )}
        />
      </View>
    </AnimatedViewHome>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  card: {
    backgroundColor: '#DCF0F5',
    borderRadius: 12,
    elevation: 4,
    marginBottom: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSection: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  detail: {
    fontSize: 14,
    color: '#444',
    marginBottom: 2,
  },
  buttonContainer: {
    marginTop: 8,
    width: 100,
  },
  logo: {
    width: 150,
    height: 80,
  },
});
