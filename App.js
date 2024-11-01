import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen} from './HomeScreen';
import { DetailsScreen} from './DetailsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerTitle: 'TODO LIST',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}/>
        <Stack.Screen name="Todo" component={DetailsScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    paddingTop: 20,
    margin: 8,
  },
});
