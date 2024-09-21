
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen01({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={{ color: 'green', fontSize: 30, fontWeight: 'bold' }}>
          Order your favorite!
        </Text>
      </View>
  
      <View style={styles.style2}>
        <Image
          source={require('../Data/Image 95.png')}
          style={{ width: 150, height: 150, marginLeft: 220 }}
        />
        <Image
           source={require('../Data/Image_96.png')}
          style={{ width: 150, height: 150, marginLeft: 50 }}
        />
        <Image
           source={require('../Data/Image 97.png')}
          style={{
            width: 150,
            height: 150,
            marginLeft: 0,
            marginTop: 0,
            marginLeft: 220,
          }}
        />
      </View>

      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green-white',
            borderRadius: 40,
            width: 240,
            height: 50,
            marginTop: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Screen_02')}>
          <Text style={{ color: 'white', backgroundColor: 'green', padding: 10, borderRadius: 5 }}>Go to Screen 02</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  style1: {
    alignItems: 'center',
    marginBottom: 0,

  },
  style2: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 0,
    
  },
  style3: {
    alignItems: 'center',
  },
});
