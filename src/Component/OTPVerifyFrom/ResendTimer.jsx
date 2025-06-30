// components/ResendTimer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResendTimer({ timer, onResend }) {
  return (
    <>
      <Text style={styles.timer}>0:{timer < 10 ? `0${timer}` : timer}</Text>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn’t receive the code?</Text>
        <TouchableOpacity onPress={onResend} disabled={timer !== 0}>
          <Text
            style={[
              styles.resendNow,
              { color: timer === 0 ? '#007AFF' : '#999' },
            ]}
          >
            Resend now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  timer: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#555',
    marginRight: 5,
  },
  resendNow: {
    fontWeight: 'bold',
  },
});
