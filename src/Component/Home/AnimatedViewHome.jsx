 
 import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default function AnimatedViewHome({
  children,
  duration = 500,
  delay = 0,
  style,
  animationType = 'fadeInUp'
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: animationType === 'fadeInUp' ? [20, 0] : [0, 0],
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: animatedValue,
          transform: [{ translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
