// screens/OTPVerifyScreen.js
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInput from './OTPInput';
import ResendTimer from './ResendTimer';
import SubmitButton from './SubmitButton';
 

export default function OTPVerifyScreen() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(30);
  const inputs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setOtp(new Array(6).fill(''));
    setTimer(30);
    inputs.current[0].focus();
  };

  const handleSubmit = () => {
    const otpCode = otp.join('');
    console.log('OTP:', otpCode);
    // TODO: API call or navigation
  };

  const isFilled = otp.every(val => val !== '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify existing account</Text>
      <Text style={styles.subtitle}>
        For your security, please verify your existing account information.
      </Text>
      <Text style={styles.otpInfo}>OTP sent to skkeleng@gmail.com</Text>

      <OTPInput otp={otp} setOtp={setOtp} inputs={inputs} />
      <ResendTimer timer={timer} onResend={handleResend} />
      <SubmitButton disabled={!isFilled} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  otpInfo: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
  },
});
