// components/OTPInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function OTPInput({ otp, setOtp, inputs }) {

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          ref={(ref) => (inputs.current[index] = ref)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpBox: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 20,
  },
});
