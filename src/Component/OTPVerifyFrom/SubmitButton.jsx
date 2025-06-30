// components/SubmitButton.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Keyboard } from 'react-native';

export default function SubmitButton({ disabled, onPress }) {
 const navigation= useNavigation()
  return (
    <TouchableOpacity
      style={[
        styles.submitBtn,
        { backgroundColor: disabled ? '#ccc' : '#007AFF' },
      ]}
      disabled={disabled}
      onPress={() => {
        Keyboard.dismiss();
        onPress();
        navigation.goBack()
      }}
    >
      <Text style={styles.submitText}>Submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submitBtn: {
    alignSelf: 'center',
    width: '100%',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
