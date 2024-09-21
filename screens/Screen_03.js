import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList, Touchable } from 'react-native';
import React, { useState } from 'react';

export default function App({ navigation }) {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: "28.00", image: require('../Data/Image 101.png'), sl: 1 },
    { key: '2', type: 'Vegetable', name: 'Orange', price: "28.00", image: require('../Data/Image 102.png'), sl: 2 },
    { key: '3', type: 'Vegetable', name: 'Coconut', price: "28.00", image: require('../Data/Image 103.png'), sl: 3 },
    { key: '4', type: 'Vegetable', name: 'Pear', price: "28.00", image: require('../Data/Image 105.png'), sl: 2 },
    { key: '5', type: 'Vegetable', name: 'Coconut', price: "28.00", image: require('../Data/Image 106.png'), sl: 2 },
    { key: '6', type: 'Vegetable', name: 'Coconut', price: "28.00", image: require('../Data/Image 107.png'), sl: 2 },
    { key: '7', type: 'Vegetable', name: 'Pear', price: "28.00", image: require('../Data/Image 105.png'), sl: 2 },


    { key: '8', type: 'Seafood', name: 'Seafood 1', price: "28.00", image: require('../Data/Image 95.png') },
    { key: '9', type: 'Seafood', name: 'Seafood 2', price: "28.00", image: require('../Data/Image 95.png') },
    { key: '10', type: 'Seafood', name: 'Seafood 3', price: "28.00", image: require('../Data/Image 95.png') },
    { key: '11', type: 'Seafood', name: 'Seafood 4', price: "28.00", image: require('../Data/Image 95.png') },
    { key: '12', type: 'Seafood', name: 'Seafood 5', price: "28.00", image: require('../Data/Image 95.png') },

    { key: '13', type: 'Drink', name: 'Drink 1', price: "28.00", image: require('../Data/Image_96.png') },
    { key: '14', type: 'Drink', name: 'Drink 2', price: "28.00", image: require('../Data/Image_96.png') },
    { key: '15', type: 'Drink', name: 'Drink 3', price: "28.00", image: require('../Data/Image_96.png') },
    { key: '16', type: 'Drink', name: 'Drink 4', price: "28.00", image: require('../Data/Image_96.png') },
    { key: '17', type: 'Drink', name: 'Drink 5', price: "28.00", image: require('../Data/Image_96.png') },
    { key: '18', type: 'Drink', name: 'Drink 6', price: "28.00", image: require('../Data/Image_96.png') }
  ]);

  const [type, setType] = useState('Vegetable');
  const [selectedBtn, setSelectedBtn] = useState('Vegetable');
  const [initialItemCount, setInitialItemCount] = useState(6);

  return (
    <ScrollView stickyHeaderIndices={[0, -1]}>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white'
      }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Screen_02") }}>
          <Image source={require('../Data/Image 183.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      
      </View>

      <View style={{
        width: '100%',
        justifyContent: 'center',
        height: 50,
        paddingHorizontal: 20,

      }}>
        <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold', }}>
          My Basket
        </Text>
        
      </View>

      <View>
        <FlatList
          data={((data.filter((item) => item.type == type)))}
          renderItem={
            ({ item }) => (
              <View style={{
                width: '100%', marginHorizontal: '2.5%', padding: 15,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Image source={item.image} style={{ width: 70, marginRight: 10 }}
                  resizeMode='contain' />
                
                <View>
                  <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>{item.price}</Text>
                  <Text style={{ fontSize: 18, color: 'sliver' }}>{item.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Image
                      source={require('../Data/Image 180.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                      source={require('../Data/Image 180.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                      source={require('../Data/Image 180.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                      source={require('../Data/Image 180.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                      source={require('../Data/Image 180.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                      source={require('../Data/Image 180.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                  </View>
                  <View style={{ marginLeft: 160, flexDirection: 'row', alignItems: 'center' , marginTop: -20}}>
                    <Image
                      source={require('../Data/Image 176.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Text style={{ fontSize: 15 }}>SL: {item.sl}</Text>

                    <Image
                      source={require('../Data/Image 175.png')}
                      style={{ width: 15, height: 15, marginLeft: 10 }}
                    />

                  </View>
                </View>
               
              </View>
             
            )}
        />
      </View>
      <View style={{ width: '100%', justifyContent: 'center'}}>
        <View style={{ wflexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
          <Text style={{ fontSize: 30 }}>Total</Text>
          <Text style={{ fontSize: 30 }}>$ 320.00</Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: 'green',
          borderRadius: 40,
          width: 240,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 90,
          marginVertical: 20,
          
        }}
          onPress={() => { navigation.navigate("Screen_02") }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Payment</Text>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
      
