import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Payment() {
    const options = [
        { icon: 'checkmark-done-circle', text: 'Your Order' },
        { icon: 'swap-vertical-outline', text: 'Payment Transaction' },
        { icon: 'time-outline', text: 'Activity' },
        { icon: 'help-circle-outline', text: 'Help' },
        { icon: 'help-buoy-outline', text: 'FAQs' },

    ];

    return (
        <View style={styles.card}>
            <Text style={styles.textHead}>Details</Text>
            <View style={styles.cardMore}>
                {options.map((item, index) => (
                    <View style={styles.detailRow} key={index}>
                        <View style={styles.leftRow}>
                            <Ionicons name={item.icon} size={26} color="gray" />
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={15} color="gray" />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#DCF0F5',
        paddingTop: 10,
    },
    textHead: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
        marginBottom: 6,
    },
    cardMore: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingVertical: 10,
    },
    leftRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '600',
        color: '#333',
    },
});
