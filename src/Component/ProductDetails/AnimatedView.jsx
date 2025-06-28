import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function AnimatedView({ children }) {
  return (
    <Animatable.View animation="fadeInUp" duration={800} style={styles.wrapper}>
      {children}
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
});
