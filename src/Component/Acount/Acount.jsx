import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileCard from './ProfileCard';
import Payment from './Payment';
import More from './More';
 

export default function Acount() {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <ScrollView>
        <Payment />
        <More />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF0F5',
  },
});
