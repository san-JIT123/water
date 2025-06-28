// components/GenderDropdown.js
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';

export default function GenderDropdown({ open, value, items, setOpen, setValue, setItems, onChange }) {
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Gender"
        onChangeValue={onChange}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 30 },
  dropdown: {
    borderColor: '#aaa',
  },
});
