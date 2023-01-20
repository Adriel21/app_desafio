import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Perfil from './screens/Perfil';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={estilos.navigation}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  navigation: {
   paddingBottom: 25,
   marginBottom: 1
  },
});
