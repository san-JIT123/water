// components/UpdateButton.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function UpdateButton({ disabled, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: disabled ? '#ccc' : '#007AFF' }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>Update Profile</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
