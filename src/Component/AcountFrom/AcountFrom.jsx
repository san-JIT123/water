// screens/AcountFrom.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NameInput from './NameInput';
import ProfileHeader from './ProfileHeader';
import MobileInput from './MobileInput';
import EmailInput from './EmailInput';
import DOBPicker from './DOBPicker';
import GenderDropdown from './GenderDropdown';
import UpdateButton from './UpdateButton';


export default function AcountFrom() {

    const [textInput, setTextInput] = useState(
        {
            name: '',
            mobile: '',
            email: '',
            DOB: '',
            gender: ''
        });
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [updateData, setUpdateData] = useState([])


    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);

    const handleChange = (key, value) => {
        setTextInput(prev => ({ ...prev, [key]: value }));
    };

    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
            handleChange('DOB', selectedDate.toDateString());
            setShowPicker(false);
        }
    };

    const isField = Object.values(textInput).every(val => val !== '');

    const handleUpdate = () => {

        const allData = {
            name: textInput.name,
            mobile: textInput.mobile,
            email: textInput.email,
            DOB: textInput.DOB,
            gender: textInput.gender
        }
        setUpdateData(allData)
        console.log(updateData)
    };


    return (
        <View style={styles.container}>
            <ProfileHeader />
            {/* <ProfileImageSet /> */}
            <NameInput onChange={handleChange} />
            <MobileInput onChange={handleChange} />
            <EmailInput onChange={handleChange} />
            <DOBPicker date={date} setShowPicker={setShowPicker} showPicker={showPicker} onChange={onChange} />
            <GenderDropdown
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={value => {
                    setValue(value);
                    handleChange('gender', value);
                }}
                setItems={setItems}
                onChange={value => handleChange('gender', value)}
            />
            <UpdateButton disabled={!isField} onPress={handleUpdate} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DCF0F5',
        padding: 20,
        flex: 1,
    },
});
