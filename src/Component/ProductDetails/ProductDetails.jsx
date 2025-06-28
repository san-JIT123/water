import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import AnimatedView from './AnimatedView';
import QuantitySelector from './QuantitySelector';
import PriceDetails from './PriceDetails';
 
 

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const product = {
    name: '20 Liter Jar',
    image: require('../../assets/images/2ndLogo.png'),
    price: 30,
    description: 'Traditional Jar of clean and safe drinking water.',
  };

  const handleOrder = () => {
    Alert.alert('Order Placed ✅', 'Thanks for shopping with us!');
  };

  const totalPrice = product.price * quantity;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AnimatedView>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>₹ {totalPrice}</Text>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <PriceDetails basePrice={product.price} total={totalPrice} />

        <Pressable style={styles.orderButton} onPress={handleOrder}>
          <Text style={styles.orderText}>Order Now</Text>
        </Pressable>
      </AnimatedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
 
    paddingHorizontal:20,
    backgroundColor: '#DCF0F5',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 12,
   
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    marginVertical: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1aa3ff',
    height: 50,
    padding:10,
    backgroundColor:'white',
    borderRadius:10

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
  orderButton: {
    backgroundColor: '#1aa3ff',
    padding: 10,
    borderRadius: 10,
    width:200,
    margin:'auto'
    
  },
  orderText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
