import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen_01 from './screens/Screen_01.js'; // Sử dụng đúng tên tệp và kiểm tra tên file

// Import các màn hình khác nếu cần
import Screen_02 from './screens/Screen_02.js';
import Screen_03 from './screens/Screen_03.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      {/* Cấu trúc navigation */}
      <Stack.Navigator initialRouteName="Screen_01" screenOptions={{ headerShown: false }}>
        {/* Thêm các màn hình khác vào Stack */}
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
        <Stack.Screen name="Screen_03" component={Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
