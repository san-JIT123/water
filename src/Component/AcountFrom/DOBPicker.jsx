// components/DOBPicker.js
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DOBPicker({ date, setShowPicker, showPicker, onChange }) {
  return (
    <View style={styles.input}>
      <TouchableOpacity style={styles.containerDate} onPress={() => setShowPicker(true)}>
        <Text style={styles.textDate}>{date.toDateString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
  },
  containerDate: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0.6,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textDate: {
    fontSize: 14,
    textAlign: 'center',
  },
});
