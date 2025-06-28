// components/EmailInput.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function EmailInput({ onChange }) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Email"
        style={[styles.input, { flex: 1 }]}
        onChangeText={text => onChange('email', text)}
      />
      <TouchableOpacity>
        <Text style={styles.changeBtn}>CHANGE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  changeBtn: {
    color: '#1aa3ff',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
