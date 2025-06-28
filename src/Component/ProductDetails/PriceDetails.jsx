import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PriceDetails({ basePrice, total }) {
  const [platformFee, setPlatformFee] = useState(0);

  useEffect(() => {
    const platformEnabled = false;
    setPlatformFee(platformEnabled ? 40 : 0);
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Price Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Base Price</Text>
        <Text style={styles.value}>₹ {basePrice}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Platform Fee</Text>
        <Text style={styles.value}>₹ {platformFee}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={[styles.label, { fontWeight: 'bold' }]}>Total</Text>
        <Text style={[styles.value, { fontWeight: 'bold' }]}>₹ {total + platformFee}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    elevation: 2,
    marginVertical: 10,
    width:240,
    margin:'auto'
  },
  
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
  value: {
    fontSize: 14,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
});
