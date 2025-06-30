import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileCard from './ProfileCard';
import Payment from './Payment';
import More from './More';
import AnimatedViewHome from '../Home/AnimatedViewHome';

export default function Acount() {
  return (
    <AnimatedViewHome delay={200} style={{ height: '100%', }}>
      <View style={styles.container}>
        <ProfileCard />
        <ScrollView>
          <Payment />
          <More/>
        </ScrollView>
      </View>
    </AnimatedViewHome>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF0F5',
  },
});
