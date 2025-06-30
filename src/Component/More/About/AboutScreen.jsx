import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function AboutScreen() {

  const listItems = [
    { title: 'Copyright' },
    { title: 'Terms of Service' },
    // { title: 'Open Source Libraries' },
    { title: 'Licenses and Registrations' },
  ];

  const navigation = useNavigation()

  const itemsData = (index) => {
    if (index == '0') {
      navigation.navigate('Copy right')
    }
    else if (index == '1') {
      navigation.navigate('Terms Of Service')
    }
    else if (index == '2') {
      navigation.navigate('Licenses and Registrations')
    }

  }
  return (
    <View style={styles.container}>
      {listItems.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => { itemsData(index) }}>
          <View style={styles.item}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              )}
            </View>
            {item.showArrow !== false && (
              <Icon name="chevron-forward" size={20} color="#999" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
