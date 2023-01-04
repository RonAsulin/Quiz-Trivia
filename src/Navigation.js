import { View, Text } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Trivia from './Trivia';
import Failed from './Failed';
import Win from './Win';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name = "Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name = "Trivia" component={Trivia} options={{headerShown: false}} />
        <Stack.Screen name = "Failed" component={Failed} options={{headerShown: false}} />
        <Stack.Screen name='Win' component={Win} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Navigation