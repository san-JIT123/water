 
 import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const activities = [
  {
    id: '1',
    icon: 'cart-outline',
    title: '২০ লিটাৰ জাৰ অর্ডাৰ কৰা হৈছে',
    time: 'আজিৰে 10:30 AM',
    status: 'অপেক্ষাৰত',
  },
  {
    id: '2',
    icon: 'checkmark-done-outline',
    title: 'পূৰ্বৰ অর্ডাৰ ডেলিভাৰ কৰা হৈছে',
    time: 'কালি 4:15 PM',
    status: 'সম্পূৰ্ণ',
  },
  {
    id: '3',
    icon: 'card-outline',
    title: 'UPI পেমেণ্ট সফল',
    time: '3 দিন আগতে',
    status: 'পেমেণ্ট সফল',
  },
  {
    id: '4',
    icon: 'refresh-outline',
    title: 'অর্ডাৰ পুনৰ নিশ্চিত কৰা হৈছে',
    time: '1 সপ্তাহ আগতে',
    status: 'প্ৰসেছিং',
  },
   {
    id: '5',
    icon: 'cart-outline',
    title: '২০ লিটাৰ জাৰ অর্ডাৰ কৰা হৈছে',
    time: 'আজিৰে 10:30 AM',
    status: 'অপেক্ষাৰত',
  },
  {
    id: '6',
    icon: 'checkmark-done-outline',
    title: 'পূৰ্বৰ অর্ডাৰ ডেলিভাৰ কৰা হৈছে',
    time: 'কালি 4:15 PM',
    status: 'সম্পূৰ্ণ',
  },
  {
    id: '7',
    icon: 'card-outline',
    title: 'UPI পেমেণ্ট সফল',
    time: '3 দিন আগতে',
    status: 'পেমেণ্ট সফল',
  },
  {
    id: '8',
    icon: 'refresh-outline',
    title: 'অর্ডাৰ পুনৰ নিশ্চিত কৰা হৈছে',
    time: '1 সপ্তাহ আগতে',
    status: 'প্ৰসেছিং',
  },
  {
    id: '9',
    icon: 'navigate-outline',
    title: 'অর্ডাৰ ট্রেকিং চলি আছে',
    time: 'আজিৰে 11:05 AM',
    status: 'ট্ৰেকিংত',
  },
  {
    id: '10',
    icon: 'close-circle-outline',
    title: 'পিন ক’ডত ডেলিভাৰী উপলভ্য নহয়',
    time: 'আজিৰে 09:15 AM',
    status: 'নহয়',
  },
  {
    id: '11',
    icon: 'location-outline',
    title: 'পিন ক’ড গ্ৰহণ কৰা হৈছে',
    time: '5 দিন আগতে',
    status: 'মান্যতা দিয়া',
  },
  {
    id: '12',
    icon: 'cash-outline',
    title: 'পেমেণ্ট সম্পূৰ্ণ কৰা হৈছে',
    time: '2 দিন আগতে',
    status: 'পেমেণ্ট সম্পূৰ্ণ',
  },
];

export default function ActivityInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ActivityInfo</Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name={item.icon} size={26} color="#2c3e50" style={styles.icon} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f9ff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#34495e',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  icon: {
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  time: {
    fontSize: 13,
    color: '#7f8c8d',
  },
  status: {
    fontSize: 14,
    color: '#2980b9',
    marginTop: 4,
  },
});
 