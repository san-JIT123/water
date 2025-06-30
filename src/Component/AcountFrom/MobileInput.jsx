// components/MobileInput.js
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function MobileInput({ onChange }) {
     const navigation=   useNavigation()
  return (
    <View style={styles.inputRow}>
      <TextInput
        label="Mobile"
        mode="outlined"
        keyboardType="numeric"
        placeholder="Mobile"
        style={[styles.input, { flex: 1 }]}
        onChangeText={text => onChange('mobile', text)}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('OTPVerifyFrom')}}>
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
