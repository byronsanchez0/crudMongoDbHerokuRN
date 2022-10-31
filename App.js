import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import List from './Views/List';
import { NavigationContainer } from '@react-navigation/native';
import Details from './Views/Details';
import Add from './Views/Add';

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{headerStyle: {backgroundColor: '#D97904'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} name="Productos" component={List} />
    <Stack.Screen options={{headerStyle: {backgroundColor: '#D97904'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} name="Detalles" component={Details} />
    <Stack.Screen options={{headerStyle: {backgroundColor: '#D97904'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} name="Agregar" component={Add} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
