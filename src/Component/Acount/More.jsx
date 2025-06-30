import { useNavigation } from '@react-navigation/native';
 
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function More() {
  const options = [
    { icon: 'information-circle-outline', text: 'About' },
    { icon: 'send-outline', text: 'Send Feedback' },
    { icon: 'alert-circle-outline', text: 'Report Safety Emergency' },
    { icon: 'settings-outline', text: 'Settings' },
    { icon: 'info', text:'App version' },
    { icon: 'log-out-outline', text: 'Log Out' },
     
  ];

 const navigation= useNavigation()
  const morePress=(index)=>{
    if(index == '0'){
      navigation.navigate('About')
    }
    else if(index == '1'){
      navigation.navigate('Send FeedBack')
    }
    else if(index == '2'){
      navigation.navigate('Report a Safety emergency')
    }
    else if(index == '3'){
      navigation.navigate('Settings')
    }
   
  }

  return (
    <View style={styles.card}>
      <Text style={styles.textHead}>More</Text>
      <View style={styles.cardMore}>
        {options.map((item, index) => (
        <Pressable key={index} onPress={()=>{morePress(index)}}>
          <View style={styles.detailRow} key={index}>
            <View style={styles.leftRow}>
              <Ionicons name={item.icon} size={26} color="gray" />
              <Text style={styles.text}>{item.text}</Text>
            </View>
            <Ionicons name="chevron-forward" size={15} color="gray" />
          </View>
             </Pressable>
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
