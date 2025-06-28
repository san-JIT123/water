// components/NameInput.js
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function NameInput({ onChange }) {
  return (
    <View style={styles.nameInput}>
      <TextInput
        label="Name"
        mode="outlined"
        placeholder="Name"
        style={{ width: '100%' }}
        onChangeText={text => onChange('name', text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nameInput: {
    marginBottom: 15,
  },
});
